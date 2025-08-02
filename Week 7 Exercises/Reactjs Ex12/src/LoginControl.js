import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import FlightDetails from './FlightDetails';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const button = isLoggedIn ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <button onClick={handleLogin}>Login</button>
  );

  const page = isLoggedIn ? <UserPage /> : <GuestPage />;

  return (
    <div style={{ textAlign: 'center' }}>
      {button}
      {page}
      <FlightDetails />
    </div>
  );
}

export default LoginControl;
