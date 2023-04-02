interface RequestData {
  rootApi: string;
  url: string;
  method: string;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export const fakeRequest = <TResponse = void>(
  requestData: RequestData,
  responseData: TResponse
): Promise<TResponse> => {
  return Promise.resolve(responseData);
};
