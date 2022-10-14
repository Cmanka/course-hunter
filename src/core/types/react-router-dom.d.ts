import 'react-router-dom';

interface ParamsOrKey {
  id: string;
}

declare module 'react-router-dom' {
  export declare function useParams<
    ParamsOrKey extends string | Record<string, string | undefined> = string
  >(): { [key in ParamsOrKey]: string };
}
