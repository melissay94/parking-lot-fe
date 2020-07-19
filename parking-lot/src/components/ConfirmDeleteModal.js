import React from 'react';
import {
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody
} from 'reactstrap';

export default function DeleteUserModal({ isOpen, toggle, modalQuestion }) {
  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>{ modalQuestion }</ModalHeader>
      <ModalBody className="delete-modal-body">
        <Button onClick={toggle}>Yes, Delete This</Button>
        <Button onClick={toggle}>Cancel</Button>
      </ModalBody>
    </Modal>
  );
}
