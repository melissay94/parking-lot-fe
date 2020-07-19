import React, { useState } from 'react';
import { Button } from 'reactstrap';

import EditUserModal from '../components/EditUserModal';
import EditPasswordModal from '../components/EditPasswordModal';
import DeleteUserModal from '../components/DeleteUserModal';
import "../styles/Profile.css";

export default function Profile(props) {

  const [editUserIsOpen, setEditUserIsOpen] = useState(false);
  const toggleEditUser = () => setEditUserIsOpen(!editUserIsOpen);

  const [editPasswordIsOpen, setEditPasswordIsOpen] = useState(false);
  const toggleEditPassword = () => setEditPasswordIsOpen(!editPasswordIsOpen);

  const [deleteUserIsOpen, setDeleteUserIsOpen] = useState(false);
  const toggleDeleteUser = () => setDeleteUserIsOpen(!deleteUserIsOpen);

  const testUser = {
    name: "Test User",
    email: "test@test.co",
    lotCount: 2,
    entryCount: 5,
    commentCount: 10
  }

  return(
    <div className="content">
      <div className="header">
        <h1>{testUser.name}</h1>
        <h3>{testUser.email}</h3>
      </div>
      <div className="stats">
        <h6>{testUser.lotCount} Lots</h6>
        <h6>{testUser.entryCount} Entries</h6>
        <h6>{testUser.commentCount} Comments</h6>
      </div>
      <div className="profile-controls">
        <Button onClick={toggleEditUser}>Edit User</Button>
        <EditUserModal isOpen={editUserIsOpen} toggle={toggleEditUser} />
        <Button onClick={toggleEditPassword}>Change Password</Button>
        <EditPasswordModal isOpen={editPasswordIsOpen} toggle={toggleEditPassword} />
        <Button onClick={toggleDeleteUser}>Delete Profile</Button>
        <DeleteUserModal isOpen={deleteUserIsOpen} toggle={toggleDeleteUser} />
        <h6>Warning! This cannot be undone!</h6>
      </div>
    </div>
  );
}
