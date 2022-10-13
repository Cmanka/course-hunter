export const parseUrl = (url: string, id: number) =>
  url.replace(':id', String(id));
