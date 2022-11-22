import { API_URL } from '../constants/app/api-url';
import { AppQuery } from '../constants/app/app-query';
import { QueryMethod } from '../constants/app/query-method';
import { StorageKey } from '../constants/app/storage-key';

const parseUrl = <T>(query: string, variables: T) => {
  if (!variables) {
    return `${API_URL}/${query}`;
  }

  return `${API_URL}/${query}?${Object.entries(variables)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)}`;
};

interface QueryBuiledVariables<TVariables> {
  query: AppQuery | string;
  method?: keyof typeof QueryMethod;
  variables?: TVariables;
}

export const queryBuilder = <TResult, TVariables = {}>({
  query,
  variables,
  method = 'GET',
}: QueryBuiledVariables<TVariables>) => {
  const token = localStorage.getItem(StorageKey.Token);

  return fetch(parseUrl(query, variables), {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
    .then((data) => data.json())
    .then((data) => data as TResult);
};
