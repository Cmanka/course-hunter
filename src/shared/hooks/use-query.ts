import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { ApiUrl } from '../constants/api-url';
import { QueryKey } from '../constants/query-key';
import { QueryMethod } from '../constants/query-method';
import { ServerError } from '../interfaces/error';
import { useLocalStorage } from './use-local-storage';

interface Options {
  query: QueryKey | string;
  method: keyof typeof QueryMethod;
  api?: string;
  isQuery?: boolean;
}

const useQuery = <Result, Variables = {}>(
  { api = ApiUrl.Python, query, method, isQuery = true }: Options,
  defaultValue = null as Result
) => {
  const [loading, setLoading] = useState(isQuery);
  const [data, setData] = useState<Result>(defaultValue);
  const [error, setError] = useState();
  const { get } = useLocalStorage();
  const token = get('Token');

  const handleFetch = useCallback(
    (variables?: Variables) => {
      setLoading(true);
      return fetch(`${api}/${query}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
        body: JSON.stringify(variables),
      })
        .then((response) => response.json() as Result | ServerError)
        .then((data) => {
          if ('detail' in data) {
            throw new Error(data.detail);
          }

          setData(data);
          return data;
        })
        .catch(({ message }) => {
          setError(message);
          toast(message, { type: 'error' });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [api, method, query, token]
  );

  return { loading, query: handleFetch, data, error };
};

export { useQuery };
