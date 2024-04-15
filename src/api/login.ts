import { post, setToken } from "./client";
import { CurrentAccount } from "../models/current-account.model";
import { API } from ".";

interface LoginResponse {
  auth_token: string;
}

export async function login(
  email: string,
  password: string
): Promise<CurrentAccount> {
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
