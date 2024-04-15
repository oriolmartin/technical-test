import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import LoginPage from "./pages/loginPage";
import useCurrentAccount from "./hooks/useCurrentAccount";

// Pages

const Router: React.FC = () => {
  const { account } = useCurrentAccount();

  const getRouterElement = (): React.ReactNode => {
    return (
      <>
        {!!account && (
          <>aa</>
          // <AuthLayout>
          //   <Routes>
          //     <Route path={routes.domains()} element={<DomainsPage />} />

          //     <Route path="*" element={<Navigate to={routes.domains()} />} />
          //   </Routes>
          // </AuthLayout>
        )}

        {!!!account && (
          <Routes>
            <Route path={routes.login()} element={<LoginPage />} />

            <Route path="*" element={<Navigate to={routes.login()} />} />
          </Routes>
        )}
      </>
    );
  };

  return <>{getRouterElement()}</>;
};

export default Router;
