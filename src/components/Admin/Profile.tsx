import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = withAuthenticationRequired(() => {
  const { error, isLoading, user } = useAuth0();
  if (error) return <p>Authentication error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container d-flex flex-column align-items-center">
      <img src={user?.picture} alt="user_picture" className="user-img mb-3" />
      <p className="text-secondary">
        Username: <span className="text-primary">{user?.name}</span>
      </p>
      <h3 className="mt-3">Hi {user?.nickname}</h3>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        doloremque
      </p>
    </div>
  );
});

export default Profile;
