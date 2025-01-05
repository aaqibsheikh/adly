import { useState, useCallback } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { appConfig } from 'src/config/appConfig';

enum ContentTypes {
  APPLICATION_JSON = 'application/json',
  MULTIPART_FORM_DATA = 'multipart/form-data',
  FORM_URLCODED = 'application/x-www-form-urlencoded',
}

interface ErrorData {
  error: string;
  message: string;
  statusCode: number;
}

interface RequestParams {
  url: string;

  isExternal?: boolean;
  method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  accessToken?: string;
  headers?: Record<string, string>;
  payload?: Record<string, any> | string | number;
  responseType?: 'arraybuffer' | 'document' | 'json' | 'text' | 'stream' | 'blob';
}

export function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const sendRequest = useCallback(
    async (requestConfig: RequestParams, applyData: <T>(response: T) => void) => {
      const {
        url,
        method = 'GET',
        accessToken,
        headers,
        payload,
        responseType,
        isExternal,
      } = requestConfig;

      const requestHeaders: Record<string, string> = {
        'Content-Type': ContentTypes.APPLICATION_JSON,
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        ...(headers || {}),
        'X-Api-Key': process.env.REACT_APP_API_KEY as string,
      };

      let data = payload;

      if (
        typeof payload === 'object' &&
        !Array.isArray(payload) &&
        payload !== null &&
        requestHeaders['Content-Type'] === 'x-www-urlencoded'
      ) {
        data = new URLSearchParams({ ...payload }).toString();
      }

      setIsLoading(true);
      setError(null);

      axios({
        url: isExternal ? url : `${appConfig.serviceUrl}/${url}`,
        method,
        headers: requestHeaders,
        data,
        responseType,
      })
        .then((response: AxiosResponse) => {
          applyData<unknown>(response.data);
        })
        .catch((error: AxiosError<ErrorData>) => {
          setError(`${error.response?.data.message || 'Unknown error, please try later'}`);
        })
        .finally(() => setIsLoading(false));
    },
    [],
  );

  return { isLoading, error, sendRequest };
}
