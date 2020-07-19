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

export default function EditCommentModal({ isOpen, toggle, comment }) {
  return(
    <Modal isOpen={isOpen} toggle={toggle} className="profile-modal">
      <ModalHeader toggle={toggle}>Edit Comment</ModalHeader>
      <ModalBody>
        <Form className="landing-form">
          <FormGroup row className="form-row">
            <Label for="comment" sm={3}>Comment</Label>
            <Col sm={9}>
              <Input type="textarea" name="comment" id="edit-comment" placeholder="Enter your comment" value={comment} />
            </Col> 
          </FormGroup>
          <Button onClick={toggle}>Update Comment</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
