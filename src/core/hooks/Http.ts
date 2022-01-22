import { useMutation, useQuery } from "react-query";
import { AxiosResponse, AxiosResponseHeaders } from "axios";
import { del, get, post, put, Request } from "../services";

export interface HttpFetchResult<T> {
  status: number;
  headers: AxiosResponseHeaders;
  response: T;
  success: boolean;
}

async function liftResponse<T>(promise: Promise<[boolean, AxiosResponse<T, any>]>): Promise<HttpFetchResult<T>> {
  let [success, {data, ...response}] = await promise;
  return { ...response, success, response: data };
}

export function useHttpGet<T = any>({ url, params, headers }: Request, ttlCache: number = 86400){
  return useQuery(url, {
    cacheTime: ttlCache,
    queryFn: () => liftResponse(get<T>({ url, params, headers }))
  });
}

export function useHttpPost<T = any>({ url, params, headers }: Request){
  return useMutation(({ data: body }: any) => {
    return liftResponse(post<T>({ url, params, headers, body }));
  });
}

export function useHttpPut<T = any>({ url, params, headers }: Request){
  return useMutation(({ data: body }: any) => {
    return liftResponse(put<T>({ url, params, headers, body }));
  });
}

export function useHttpDelete<T = any>({ url, params, headers }: Request){
  return useMutation(() => {
    return liftResponse(del<T>({ url, params, headers }));
  });
}
