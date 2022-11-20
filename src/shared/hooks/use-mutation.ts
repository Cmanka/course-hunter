import { useCallback, useState } from 'react';

import { ApiUrl } from '../constants/api-url';
import { QueryKey } from '../constants/query-key';
import { QueryMethod } from '../constants/query-method';
import { ServerError } from '../interfaces/error';
import { useToast } from '../recoil/toast/hook';
import { useLocalStorage } from './use-local-storage';

interface Options<TVariables> {
  query: QueryKey | string;
  method: keyof typeof QueryMethod;
  api?: string;
  variables?: TVariables;
}

const useMutation = <TResult, TVariables = {}>(
  { api = ApiUrl.Python, query, method }: Options<TVariables>,
  defaultValue = null as TResult
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TResult>(defaultValue);
  const [error, setError] = useState();
  const { get } = useLocalStorage();
  const token = get('Token');
  const { addToast } = useToast();

  const handleFetch = useCallback(
    (variables?: TVariables) => {
      setLoading(true);
      return fetch(`${api}/${query}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
        body: JSON.stringify(variables),
      })
        .then((response) => response.json() as TResult | ServerError)
        .then((data) => {
          if ('detail' in data) {
            throw new Error(data.detail);
          }

          setData(data);
          return data;
        })
        .catch(({ message }) => {
          setError(message);
          addToast({ text: message, type: 'Error' });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [addToast, api, method, query, token]
  );

  return { loading, mutate: handleFetch, data, error };
};

export { useMutation };
