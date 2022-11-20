import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { QueryKey } from '../constants/query-key';
import { QueryMethod } from '../constants/query-method';
import { ServerError } from '../interfaces/error';
import { parseQueryUrl } from './../helpers/parse-query-url';
import { useLocalStorage } from './use-local-storage';

interface Options<TVariables> {
  query: QueryKey | string;
  method: keyof typeof QueryMethod;
  api?: string;
  variables?: TVariables;
  isFetch?: boolean;
}

const useQuery = <TResult, TVariables = {}>(
  { query, method, variables, isFetch = true }: Options<TVariables>,
  defaultValue = null as TResult
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TResult>(defaultValue);
  const [error, setError] = useState();
  const { get } = useLocalStorage();
  const token = get('Token');

  useEffect(() => {
    if (isFetch) {
      fetch(parseQueryUrl(query, variables), {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
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
          toast(message, { type: 'error' });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isFetch, method, query, token, variables]);

  return { loading, data, error };
};

export { useQuery };
