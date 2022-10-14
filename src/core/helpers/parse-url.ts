export const parseUrl = (url: string, id: number | string) =>
  url.replace(':id', String(id));
