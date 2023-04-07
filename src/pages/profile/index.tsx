import { observer } from "mobx-react-lite";

import { useModel } from "./model";

const ProfilePage = observer(() => {
  const model = useModel();

  return (
    <main>
      Profile Page
      <p>Email: {model.email}</p>
      <p>Name: {model.name}</p>
      <button onClick={model.handleSignOut}>Sign Out</button>
    </main>
  );
});

export default ProfilePage;
