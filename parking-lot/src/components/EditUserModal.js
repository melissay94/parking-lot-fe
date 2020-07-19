import React from 'react';
import {
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export default function EditUserModal({ isOpen, toggle }) {
  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>Edit User</ModalHeader>
      <ModalBody>
        <Form className="landing-form">
          <FormGroup row className="form-row">
            <Label for="email" sm={3}>Email</Label>
            <Col sm={9}>
              <Input type="email" name="email" id="edit-email" placeholder="Change Email" />
            </Col> 
          </FormGroup>
          <FormGroup row className="form-row">
            <Label for="firstName" sm={3}>First Name</Label>
            <Col sm={9}>
              <Input type="text" name="firstName" id="edit-first-name" placeholder="Change First Name" />
            </Col> 
          </FormGroup>
          <FormGroup row className="form-row">
            <Label for="lastName" sm={3}>Last Name</Label>
            <Col sm={9}>
              <Input type="text" name="lastName" id="edit-last-name" placeholder="Change Last Name" />
            </Col> 
          </FormGroup>
          <Button onClick={toggle}>Update User</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
