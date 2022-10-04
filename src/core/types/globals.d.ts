declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string;
      PORT: string;
    }
  }
}

export {};
