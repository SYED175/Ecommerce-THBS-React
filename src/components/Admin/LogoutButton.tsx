import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isLoading } = useAuth0();
  if (isLoading) return <p>Loading...</p>;
  return (
    <button className="btn btn-secondary" onClick={() => logout()}>
      Log out
    </button>
  );
};

export default LogoutButton;
// { logoutParams: { returnTo: window.location.origin } }
