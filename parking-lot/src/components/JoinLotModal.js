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

export default function JoinLotModal({ isOpen, toggle }) {
  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>Enter Lot Code</ModalHeader>
      <ModalBody>
        <Form className="landing-form">
          <FormGroup row className="form-row">
            <Label for="lot-code" sm={3}>Lot Code</Label>
            <Col sm={9}>
              <Input type="text" name="lot-code" id="lot-code" placeholder="Enter Lot Code" />
              <FormText>Codes are case-sensative.</FormText>
            </Col> 
          </FormGroup>
          <Button onClick={toggle}>Join Lot</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
