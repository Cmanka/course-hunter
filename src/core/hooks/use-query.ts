import { QueryKey } from 'core/constants/query-key';
import { QueryMethod } from 'core/constants/query-method';
import { useRef, useState } from 'react';
import { Id, toast } from 'react-toastify';

interface Options {
  query: QueryKey;
  method: keyof typeof QueryMethod;
}

const useQuery = <Variables, Result>({ query, method }: Options) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Result>();
  const [error, setError] = useState();
  const toastId = useRef<Id>();

  const handleFetch = (variables: Variables) => {
    setLoading(true);
    toastId.current = toast('Fetching...', { type: 'info' });
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
        toast.dismiss(toastId.current);
        setLoading(false);
      });
  };

  return { loading, query: handleFetch, data, error };
};

export { useQuery };
