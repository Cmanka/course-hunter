import { ApiUrl } from '../constants/api-url';

export const parseQueryUrl = <T>(query: string, variables: T) => {
  if (!variables) {
    return `${ApiUrl.Python}/${query}`;
  }

  return `${ApiUrl.Python}/${query}?${Object.entries(variables)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)}`;
};
