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

export default function DeleteUserModal({ isOpen, toggle }) {
  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>Change Password</ModalHeader>
      <ModalBody>
        <Form className="landing-form">
          <FormGroup row className="form-row">
            <Label for="current-password" sm={3}>Password</Label>
            <Col sm={9}>
              <Input type="password" name="current-password" id="your-password" placeholder="Enter Your Password" />
              <FormText>Warning! This action is irriversible.</FormText>
            </Col> 
          </FormGroup>
          <Button onClick={toggle}>Delete Account</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
