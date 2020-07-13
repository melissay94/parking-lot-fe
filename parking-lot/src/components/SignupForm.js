import React from 'react';
import { Col, Button, Form, FormText, FormGroup, Label, Input, Row } from 'reactstrap';

export default function SignupForm() {
  return(
    <Form>
      <h3>Let's Get Started!</h3>
      <Row form>
        <Col md={6}>
          <FormGroup row>
            <Label for='firstName' sm={3}>First Name</Label>
            <Col sm={9}>
              <Input type='text' name='firstName' id='firstName' placeholder='Enter First Name' />
            </Col>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup row>
            <Label for='lastName' sm={3}>Last Name</Label>
            <Col sm={9}>
              <Input type='text' name='lastName' id='lastName' placeholder='Enter Last Name' />
            </Col>
          </FormGroup>
        </Col>
      </Row>
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
          <FormText>Passwords must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number. Must also be at least 12 characters long.</FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for='repeatPassword' sm={3}>Retype Password</Label>
        <Col sm={9}>
          <Input type='password' name='repeatPassword' id='repeatPassword' placeholder='Enter Password Again' />
        </Col>
      </FormGroup>
      <FormGroup check>
        <Input type='checkbox' name='check' id='agreeCheck' />
        <Label for='agreeCheck' check>By clicking this box, you agree that you are at least 18 years of age.</Label>
      </FormGroup>
      <Button>Sign Up</Button>
    </Form>
  );
}
