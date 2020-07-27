import React from 'react';

export default function ProfileHeader({ user }) {

  return(
    <div className="header">
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
    </div>
  );
}
