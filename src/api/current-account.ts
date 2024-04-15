import { CurrentAccount } from '../models/current-account.model';
import { get } from './client';

export async function getCurrentAccount(): Promise<CurrentAccount> {
  return get<{ data: CurrentAccount }>('/login/current').then(
    (resp: { data: CurrentAccount }) => resp.data
  );
}
