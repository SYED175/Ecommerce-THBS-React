import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const AdminPage = withAuthenticationRequired(() => {
  const { user } = useAuth0();
  return <h1>Hii {user?.name} successfully Authenticated</h1>;
});

export default AdminPage;
