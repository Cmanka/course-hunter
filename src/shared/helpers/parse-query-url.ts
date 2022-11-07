import { ApiUrl } from '../constants/api-url';

export const parseQueryUrl = (
  query: string,
  variables: { [key: string]: string }
) => {
  if (!variables) {
    return `${ApiUrl.Python}/${query}`;
  }

  return `${ApiUrl.Python}/${query}?${Object.entries(variables).map(
    ([key, value]) => `${key}=${value}`
  )}`;
};
