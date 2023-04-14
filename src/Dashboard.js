import { auth } from './firebase';

function Dashboard({ user }) {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}

export default Dashboard;