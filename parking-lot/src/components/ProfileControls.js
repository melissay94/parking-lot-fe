import React, { useState } from 'react';
import { Button } from 'reactstrap';

import EditUserModal from '../modals/EditUserModal';
import EditPasswordModal from '../modals/EditPasswordModal';
import DeleteUserModal from '../modals/DeleteUserModal';

export default function ProfileControls() {

  const [editUserIsOpen, setEditUserIsOpen] = useState(false);
  const [editPasswordIsOpen, setEditPasswordIsOpen] = useState(false);
  const [deleteUserIsOpen, setDeleteUserIsOpen] = useState(false);
  
  const toggleEditUser = () => setEditUserIsOpen(!editUserIsOpen);
  const toggleEditPassword = () => setEditPasswordIsOpen(!editPasswordIsOpen);
  const toggleDeleteUser = () => setDeleteUserIsOpen(!deleteUserIsOpen);

  return(
    <div className="profile-controls">
      <Button onClick={toggleEditUser}>Edit User</Button>
      <EditUserModal isOpen={editUserIsOpen} toggle={toggleEditUser} />
      <Button onClick={toggleEditPassword}>Change Password</Button>
      <EditPasswordModal isOpen={editPasswordIsOpen} toggle={toggleEditPassword} />
      <Button onClick={toggleDeleteUser}>Delete Profile</Button>
      <DeleteUserModal isOpen={deleteUserIsOpen} toggle={toggleDeleteUser} />
      <h6>Warning! This cannot be undone!</h6>
    </div>
  );
}
