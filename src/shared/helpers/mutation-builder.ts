import { AppQuery } from '../constants/app/app-query';
import { QueryMethod } from '../constants/app/query-method';
import { StorageKey } from '../constants/app/storage-key';
import { buildUrl } from './build-url';

interface MutationBuiledVariables<TVariables> {
  query: AppQuery;
  method?: keyof typeof QueryMethod;
  variables?: TVariables;
}

const mutationBuilder = <TResult, TVariables = {}>({
  query,
  variables,
  method = 'POST',
}: MutationBuiledVariables<TVariables>) => {
  const token = localStorage.getItem(StorageKey.Token);

  return fetch(buildUrl(query), {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(variables),
  })
    .then((data) => data.json())
    .then((data) => data as TResult);
};

export { mutationBuilder };
