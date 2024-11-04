import React from 'react';

const Profile = ({ user }) => (
  <div>
    <h1>Welcome, {user.name}</h1>
    <p>Email: {user.email}</p>
  </div>
);

export default Profile;
