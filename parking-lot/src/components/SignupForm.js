import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { Col, Button, Form, FormText, FormGroup, Label, Input, Spinner } from 'reactstrap';

import useSignup from '../hooks/useSignup';

export default function SignupForm() {

  const client = useApolloClient();
  const {
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
    role,
    confirmedAge,
    message,
    handleEmailChange,
    handleFirstNameChange,
    handleLastNameChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRoleChange,
    handleAgeConfirmChange,
    handleSubmit,
    data,
    loading
  } = useSignup(client);
  const history = useHistory();

  useEffect(() => {
    if (data) {
      history.push("/home");
    }
  }, [data, history]);

  if (loading) {
    return(
      <div>
        <Spinner type="grow" color="light" />
      </div>
    );
  }

  return(
    <Form className="landing-form" onSubmit={handleSubmit}>
      <h3>Let's Get Started!</h3>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='firstName' sm={2}>First Name</Label>
        <Col sm={8}>
          <Input 
            type='firstName' 
            name='firstName' 
            id='firstName' 
            placeholder='Enter First Name'
            value={firstName}
            onChange={handleFirstNameChange} />
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='lastName' sm={2}>Last Name</Label>
        <Col sm={8}>
          <Input 
            type='lastName' 
            name='lastName' 
            id='lastName' 
            placeholder='Enter Last Name'
            value={lastName}
            onChange={handleLastNameChange} />
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='email' sm={2}>Email *</Label>
        <Col sm={8}>
          <Input 
            type='email' 
            name='email' 
            id='email' 
            placeholder='Enter Email'
            value={email}
            onChange={handleEmailChange} />
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='password' sm={2}>Password *</Label>
        <Col sm={8}>
          <Input 
            type='password' 
            name='password' 
            id='password' 
            placeholder='Enter Password'
            value={password}
            onChange={handlePasswordChange} />
          <FormText>Passwords must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number. Must also be at least 12 characters long.</FormText>
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='repeatPassword' sm={2}>Retype Password *</Label>
        <Col sm={8}>
          <Input 
            type='password' 
            name='repeatPassword' 
            id='repeatPassword' 
            placeholder='Enter Password Again'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange} />
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='user-type' sm={2}>I am a </Label>
        <Col sm={8}>
          <Input 
            type='select' 
            name='user-type' 
            id='user-type' 
            value={role === 0 ? "Student" : "Teacher"}
            onChange={handleRoleChange}> 
            <option>Student</option>
            <option>Teacher</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup check className="form-row check-row">
        <Input 
          type='checkbox' 
          name='check' 
          id='agree-check' 
          value={confirmedAge}
          onChange={handleAgeConfirmChange} />
        <Label for='agreeCheck' check>By clicking this box, you agree that you are at least 18 years of age. *</Label>
      </FormGroup>
      <div className="form-row">
        <Col sm={1}></Col>
        <h6 className="error">{message}</h6>
        <Button>Sign Up</Button>
      </div>
    </Form>
  );
}
