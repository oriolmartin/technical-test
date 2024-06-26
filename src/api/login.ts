import { post, postNoJson, setToken } from "./client";
import { CurrentAccount } from "../models/current-account.model";
import { API } from ".";

interface LoginResponse {
  auth_token: string;
}

export async function login(
  email: string,
  password: string
): Promise<CurrentAccount | undefined> {
  const response = await post<LoginResponse>("/login", {
    email,
    password,
  });

  setToken(response.auth_token);

  return API.currentAccount.get();
}

export function logout(): void {
  setToken(null);
}

export async function register(user: Record<string, any>): Promise<any> {
  return postNoJson("/login/create", user);
}
