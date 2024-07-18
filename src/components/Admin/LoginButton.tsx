import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();
  if (isLoading) return <p>Loading...</p>;
  return (
    <button className="btn btn-secondary" onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
};

export default LoginButton;
