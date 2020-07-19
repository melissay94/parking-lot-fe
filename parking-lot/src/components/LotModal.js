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

export default function LotModal({ isOpen, toggle, isNew, lot=null }) {

  const modalTitle = isNew ? "Add Lot" : "Edit Lot"

  const submitButton = isNew ? <Button className="add-lot" onClick={toggle}>Add Lot</Button> : <Button className="edit-lot" onClick={toggle}>Edit Lot</Button>;
  
  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>Edit Post</ModalHeader>
      <ModalBody>
        <Form className="landing-form">
          <FormGroup row className="form-row">
            <Label for="title" sm={3}>{modalTitle}</Label>
            <Col sm={9}>
              <Input type="text" name="title" id="lot-title" placeholder="Enter Title" value={ lot ? lot.title : "" } />
            </Col> 
          </FormGroup>
          <FormGroup row className="form-row">
            <Label for="description" sm={3}>Post</Label>
            <Col sm={9}>
              <Input type="textarea" name="description" id="lot-description" value={ lot ? lot.description : ""} />
            </Col> 
          </FormGroup>
          {submitButton}
        </Form>
      </ModalBody>
    </Modal>
  );
}
