import { API_URL } from '../constants/app/api-url';

export const buildUrl = <T>(query: string, variables?: T) => {
  if (!variables) {
    return `${API_URL}/${query}`;
  }

  return `${API_URL}/${query}?${Object.entries(variables)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)}`;
};
