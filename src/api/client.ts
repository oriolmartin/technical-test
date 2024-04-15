import ky from "ky";
import { CONFIG } from "../config/config";
import { trackPromise } from "react-promise-tracker";

let token: string | null = localStorage.getItem("authToken") || null;

type ErrorListener = (response: Response) => void;

let listener: ErrorListener | undefined = undefined;

interface ResponseType {
  response: Response;
}

export function setClientErrorListener(newListener?: ErrorListener): void {
  listener = newListener;
}

export async function handleErrors<T>({ response }: ResponseType): Promise<T> {
  if (!!listener) {
    listener(response);
  }

  return Promise.reject(response);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function retreiveErrors<T>(e: any): Promise<T> {
  return handleErrors(e as ResponseType);
}

function getUrlPath(path: string): string {
  return `${CONFIG.API_URL}${path}`;
}
function getAuthHeader(): Record<string, string> {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function get<T>(
  path: string,
  searchParams: Record<string, string> = {}
): Promise<T> {
  return trackPromise(
    ky.get(getUrlPath(path), { headers: getAuthHeader(), searchParams }).json()
  );
}

export async function post<T>(path: string, json: unknown = {}): Promise<T> {
  try {
    return await trackPromise(
      ky.post(getUrlPath(path), { headers: getAuthHeader(), json }).json()
    );
  } catch (e) {
    return retreiveErrors(e);
  }
}

export async function postNoJson(
  path: string,
  json: unknown = {}
): Promise<any> {
  try {
    return await trackPromise(
      ky.post(getUrlPath(path), { headers: getAuthHeader(), json })
    );
  } catch (e) {
    return retreiveErrors(e);
  }
}

export async function put(path: string, json: unknown = {}): Promise<any> {
  try {
    return await trackPromise(
      ky.put(getUrlPath(path), { headers: getAuthHeader(), json })
    );
  } catch (e) {
    return retreiveErrors(e);
  }
}

export async function del(path: string, json: unknown = {}): Promise<any> {
  try {
    return await trackPromise(
      ky.delete(getUrlPath(path), { headers: getAuthHeader(), json })
    );
  } catch (e) {
    return retreiveErrors(e);
  }
}

export function setToken(newToken: string | null): void {
  localStorage.setItem("authToken", newToken || "");

  token = newToken;
}
