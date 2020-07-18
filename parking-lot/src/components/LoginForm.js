import React from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import "../styles/LandingForm.css";

export default function LoginForm() {
  return (
    <Form className="landing-form">
      <h3>Welcome Back!</h3>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='email' sm={2}>Email</Label>
        <Col sm={8}>
          <Input type='email' name='email' id='email' placeholder='Enter Email' />
        </Col>
      </FormGroup>
      <FormGroup row  className="form-row">
        <Col sm={1}></Col>
        <Label for='password' sm={2}>Password</Label>
        <Col sm={8}>
          <Input type='password' name='password' id='password' placeholder='Enter Password' />
        </Col>
      </FormGroup>
      <div  className="form-row">
        <Button>Login</Button>
      </div>
    </Form>
  );
}
