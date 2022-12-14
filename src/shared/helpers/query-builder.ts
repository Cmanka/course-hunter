import { AppQuery } from '../constants/app/app-query';
import { QueryMethod } from '../constants/app/query-method';
import { StorageKey } from '../constants/app/storage-key';
import { buildUrl } from './build-url';

interface QueryBuiledVariables<TVariables> {
  query: AppQuery | string;
  method?: keyof typeof QueryMethod;
  variables?: TVariables;
}

const queryBuilder = <TResult, TVariables = {}>({
  query,
  variables,
  method = 'GET',
}: QueryBuiledVariables<TVariables>) => {
  const token = localStorage.getItem(StorageKey.Token);

  return fetch(buildUrl(query, variables), {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
    .then((data) => data.json())
    .then((data) => data as TResult);
};

export { queryBuilder };
