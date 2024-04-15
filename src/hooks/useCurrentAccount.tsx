import React, { useState, createContext, useContext, useEffect } from "react";
import { CurrentAccount } from "../models/current-account.model";
import { API } from "../api";

interface AccountContextState {
  account?: CurrentAccount;
  setAccount: (account?: CurrentAccount) => void;
}

const CurrentAccountContext = createContext<AccountContextState>({
  account: undefined,
  setAccount: () => undefined,
});

interface Props {
  children?: React.ReactNode;
}

export const CurrentAccountProvider: React.FC<Props> = ({
  children,
}: Props) => {
  const [account, setAccount] = useState<CurrentAccount | undefined>();

  async function retrieveCurrentAccount(): Promise<void> {
    try {
      const currentAccount = await API.currentAccount.get();
      setAccount(currentAccount);
    } catch (ex) {
      // Not logged in
    }
  }

  useEffect(() => {
    retrieveCurrentAccount();
  }, []);

  return (
    <CurrentAccountContext.Provider value={{ account, setAccount }}>
      {children}
    </CurrentAccountContext.Provider>
  );
};

export default function useCurrentAccount(): AccountContextState {
  return useContext(CurrentAccountContext);
}
