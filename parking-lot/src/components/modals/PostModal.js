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

export default function EditPostModal({ isOpen, toggle, isNew, post=null }) {

  const modalTitle = isNew ? "Add Entry" : "Edit Entry"

  const submitButton = isNew ? <Button className="add-entry" onClick={toggle}>Add Entry</Button> : <Button className="edit-entry" onClick={toggle}>Update Entry</Button>;

  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        <Form className="landing-form">
          <FormGroup row className="form-row">
            <Label for="title" sm={3}>Title</Label>
            <Col sm={9}>
              <Input type="text" name="title" id="edit-title" placeholder="Change Title" value={ post ? post.name : "" } />
            </Col> 
          </FormGroup>
          <FormGroup row className="form-row">
            <Label for="description" sm={3}>Post</Label>
            <Col sm={9}>
              <Input type="textarea" name="description" id="edit-description" value={ post ? post.description : ""} />
            </Col> 
          </FormGroup>
          {submitButton}
        </Form>
      </ModalBody>
    </Modal>
  );
}
