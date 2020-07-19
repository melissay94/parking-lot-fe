import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Button,
  Label
} from 'reactstrap';

export default function CommentForm() {
  return (
    <Form className="comment-form">
      <FormGroup>
        <Label for="comment">New Comment</Label>
        <Input type="textarea" name="comment" id="comment" />
      </FormGroup>
      <Button>Add Comment</Button>
    </Form>
  );
}
