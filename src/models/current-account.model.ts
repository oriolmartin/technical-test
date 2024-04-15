export interface CurrentAccount {
  id: number;
  login_name: string;
}

export interface CurrentResponse {
  data: CurrentAccount;
}
