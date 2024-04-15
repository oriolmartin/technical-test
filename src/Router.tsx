import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import LoginPage from "./pages/loginPage";
import useCurrentAccount from "./hooks/useCurrentAccount";

import AuthLayout from "./layout/authLayout";
import LoadingSpinner from "./layout/loadingSpinner";
import UsersPage from "./pages/usersPage";

// Pages

const Router: React.FC = () => {
  const { account } = useCurrentAccount();

  const getRouterElement = (): React.ReactNode => {
    return (
      <LoadingSpinner>
        {!!account && (
          <AuthLayout>
            <Routes>
              <Route path={routes.home()} element={undefined} />
              <Route path={routes.users()} element={<UsersPage />} />

              <Route path="*" element={<Navigate to={routes.home()} />} />
            </Routes>
          </AuthLayout>
        )}

        {!!!account && (
          <Routes>
            <Route path={routes.login()} element={<LoginPage />} />

            <Route path="*" element={<Navigate to={routes.login()} />} />
          </Routes>
        )}
      </LoadingSpinner>
    );
  };

  return <>{getRouterElement()}</>;
};

export default Router;
