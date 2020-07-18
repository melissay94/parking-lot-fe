import React from 'react';
import { Col, Button, Form, FormText, FormGroup, Label, Input } from 'reactstrap';
import "../styles/LandingForm.css";

export default function SignupForm() {
  return(
    <Form className="landing-form">
      <h3>Let's Get Started!</h3>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='firstName' sm={2}>First Name</Label>
        <Col sm={8}>
          <Input type='firstName' name='firstName' id='firstName' placeholder='Enter First Name' />
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='lastName' sm={2}>Last Name</Label>
        <Col sm={8}>
          <Input type='lastName' name='lastName' id='lastName' placeholder='Enter Last Name' />
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='email' sm={2}>Email</Label>
        <Col sm={8}>
          <Input type='email' name='email' id='email' placeholder='Enter Email' />
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='password' sm={2}>Password</Label>
        <Col sm={8}>
          <Input type='password' name='password' id='password' placeholder='Enter Password' />
          <FormText>Passwords must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number. Must also be at least 12 characters long.</FormText>
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='repeatPassword' sm={2}>Retype Password</Label>
        <Col sm={8}>
          <Input type='password' name='repeatPassword' id='repeatPassword' placeholder='Enter Password Again' />
        </Col>
      </FormGroup>
      <FormGroup check className="form-row check-row">
        <Input type='checkbox' name='check' id='agree-check' />
        <Label for='agreeCheck' check>By clicking this box, you agree that you are at least 18 years of age.</Label>
      </FormGroup>
      <div className="form-row">
        <Button>Sign Up</Button>
      </div>
    </Form>
  );
}
