import React, { PropsWithChildren } from "react";
import AuthProvider from "./AuthProvider";
import ReduxProvider from "./ReduxProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </AuthProvider>
  );
};

export default Providers;
