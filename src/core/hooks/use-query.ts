import { QueryKey } from 'core/constants/query-key';
import { QueryMethod } from 'core/constants/query-method';
import { ServerError } from 'core/interfaces/error';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface Options {
  query: QueryKey;
  method: keyof typeof QueryMethod;
}

const useQuery = <Variables, Result>({ query, method }: Options) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Result>();
  const [error, setError] = useState();

  const handleFetch = (variables: Variables) => {
    setLoading(true);
    return fetch(`https://projectcoursehunter.herokuapp.com/${query}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(variables),
    })
      .then((response) => response.json() as Result | ServerError)
      .then((data) => {
        if ('error' in data) {
          throw new Error(data.error);
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
