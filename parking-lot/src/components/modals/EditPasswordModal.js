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
  Input,
  FormText
} from 'reactstrap';

export default function EditPasswordModal({ isOpen, toggle }) {
  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>Change Password</ModalHeader>
      <ModalBody>
        <Form className="landing-form">
          <FormGroup row className="form-row">
            <Label for="current-password" sm={3}>Current Password</Label>
            <Col sm={9}>
              <Input type="password" name="current-password" id="current-password" placeholder="Enter Current Password" />
            </Col> 
          </FormGroup>
          <FormGroup row className="form-row">
            <Label for="new-password" sm={3}>New Password</Label>
            <Col sm={9}>
              <Input type="password" name="new-password" id="new-password" placeholder="Enter New Password" />
              <FormText>Passwords must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number. Must also be at least 12 characters long.</FormText>
            </Col> 
          </FormGroup>
          <Button onClick={toggle}>Update Password</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
