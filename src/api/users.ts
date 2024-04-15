import { User } from "../models/user.model";
import { get } from "./client";

export async function getUsers(): Promise<User[]> {
  return get("/users");
}
