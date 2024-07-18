import { PropsWithChildren } from "react";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      clientId={clientId}
      domain={domain}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
