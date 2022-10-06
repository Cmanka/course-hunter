import { QueryKey } from 'core/constants/query-key';
import { QueryMethod } from 'core/constants/query-method';
import { useState } from 'react';

interface Options {
  query: QueryKey;
  method: keyof typeof QueryMethod;
}

const useQuery = <T>({ query, method }: Options) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState();

  const handleFetch = (variables: T) => {
    setLoading(true);
    fetch(`https://projectcoursehunter.herokuapp.com/${query}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(variables),
    })
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { loading, query: handleFetch, data, error };
};

export { useQuery };
