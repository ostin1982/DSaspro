interface Config {
  errorHandler: ((errorsWithData: Record<string, unknown>) => void) | null;
}

export const config: Config = {
  errorHandler: null,
};

export const configure = ({ errorHandler }: Partial<Config>) => {
  if (errorHandler) {
    config.errorHandler = errorHandler;
  }
};
