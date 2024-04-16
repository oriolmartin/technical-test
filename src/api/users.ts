import { User } from "../models/user.model";
import { get, post, put } from "./client";

export async function getUsers(): Promise<User[]> {
  return get("/users");
}

export async function showUser(user_id: string): Promise<User> {
  return get(`/users/${user_id}`);
}

export async function createUser(user: Record<string, any>): Promise<any> {
  return post("/users", user);
}

export async function editUser(user: Record<string, any>): Promise<any> {
  return put(`/users/${user._id}`, user);
}
