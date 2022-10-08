import { QueryKey } from 'core/constants/query-key';
import { QueryMethod } from 'core/constants/query-method';
import { ServerError } from 'core/interfaces/error';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useLocalStorage } from './use-local-storage';

interface Options {
  query: QueryKey;
  method: keyof typeof QueryMethod;
  api?: string;
}

const useQuery = <Result, Variables = {}>({
  api = 'https://projectcoursehunter.herokuapp.com',
  query,
  method,
}: Options) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Result>();
  const [error, setError] = useState();
  const { get } = useLocalStorage();
  const token = get('Token');

  const handleFetch = (variables?: Variables) => {
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
  };

  return { loading, query: handleFetch, data, error };
};

export { useQuery };
