import { QueryKey } from 'core/constants/query-key';
import { QueryMethod } from 'core/constants/query-method';
import { useState } from 'react';

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
      .then((response) => response.json() as Result)
      .then((data) => {
        setData(data);
        return data;
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, query: handleFetch, data, error };
};

export { useQuery };
