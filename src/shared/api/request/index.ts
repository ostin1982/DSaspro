import { config, SERVER_ERRORS } from "@/shared/api/config";
import { DEFAULT_LANGUAGE } from "@/shared/config";

interface RequestData {
  rootApi: string;
  url: string;
  method: string;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}

const getUserLanguage = () =>
  window.navigator.language
    ? window.navigator.language.split("-")[0]
    : DEFAULT_LANGUAGE;

const handleNotFoundStatus = (response: Response): Response => {
  if (response.status === 400) {
    throw {
      code: response.status,
      message: SERVER_ERRORS.NOT_FOUND,
    };
  }

  return response;
};

interface ResponseWithError extends Response {
  error?: string;
}

const handleServerErrorsInResponse = (
  response: ResponseWithError
): Response => {
  if (response && response.error) {
    throw response.error;
  }

  return response;
};

export const request = (requestData: RequestData): Promise<void | Response> => {
  const { rootApi, url, method, body = null, headers = {} } = requestData;

  const baseUrl = `${config.apiUrl}/${rootApi}`;

  const requestBody = body;
  const requestHeaders = headers;

  requestHeaders.locale = getUserLanguage();

  if (headers.authorization) {
    requestHeaders.authorization = `Bearer ${config.accessToken}`;
  }

  let initOptions: RequestInit = {
    method,
    headers: requestHeaders,
  };

  if (body !== null) {
    initOptions = {
      ...initOptions,
      body: JSON.stringify(requestBody),
    };
  }

  const request = new Request(`${baseUrl}${url}`, initOptions);

  return fetch(request)
    .then(handleNotFoundStatus)
    .then((response) => response.json())
    .then(handleServerErrorsInResponse)
    .catch((error) => {
      const errorWithRequestData = { ...error, requestData };

      config.errorHandler?.(errorWithRequestData);
    });
};

export const fakeRequest = <TResponse = void>(
  requestData: RequestData,
  responseData: TResponse
): Promise<TResponse> => {
  return Promise.resolve(responseData);
};
