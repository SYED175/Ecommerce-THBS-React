import { withAuthenticationRequired } from "@auth0/auth0-react";
import Profile from "../components/Admin/Profile";

const AdminPage = withAuthenticationRequired(() => {
  return (
    <>
      <Profile />
    </>
  );
});

export default AdminPage;
