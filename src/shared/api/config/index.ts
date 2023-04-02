export type AccessToken = string;

export const SERVER_ERRORS = {
  NOT_FOUND: "E_NOT_FOUND",
  UNAUTHORIZED: "E_UNAUTHORIZED",
};

interface Config {
  apiUrl: string;
  accessToken: AccessToken | null;
  errorHandler: ((errorsWithData: Record<string, unknown>) => void) | null;
}

export const config: Config = {
  apiUrl: "",
  accessToken: null,
  errorHandler: null,
};

export const configure = ({ apiUrl, errorHandler }: Partial<Config>) => {
  if (apiUrl) {
    config.apiUrl = apiUrl;
  }

  if (errorHandler) {
    config.errorHandler = errorHandler;
  }
};

export const setAccessToken = (accessToken: string) => {
  config.accessToken = accessToken;
};
