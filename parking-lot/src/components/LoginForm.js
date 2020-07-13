import React from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default function LoginForm() {
  return (
    <Form>
      <h3>Welcome Back!</h3>
      <FormGroup row>
        <Label for='email' sm={3}>Email</Label>
        <Col sm={9}>
          <Input type='email' name='email' id='email' placeholder='Enter Email' />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for='password' sm={3}>Password</Label>
        <Col sm={9}>
          <Input type='password' name='password' id='password' placeholder='Enter Password' />
        </Col>
      </FormGroup>
      <Button>Login</Button>
    </Form>
  );
}
