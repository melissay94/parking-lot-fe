import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { Col, Button, Form, FormText, FormGroup, Label, Input, Spinner } from 'reactstrap';
import gql from 'graphql-tag';

const SIGNUP_USER = gql`
  mutation signup($email: String!, $password: String!, $name: String, $role: Int!) {
    signup(email: $email, password: $password, name: $name, role: $role) {
      token
    }
  }
`;

export default function SignupForm() {

  const client = useApolloClient();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(0);
  const [confirmedAge, setConfirmedAge] = useState(false);
  const [message, setMessage] = useState(null);

  const [signup, { data, loading }] = useMutation(SIGNUP_USER, {
    onCompleted({ signup }) {
      localStorage.setItem('token', signup.token);
      client.writeQuery({ 
        query: gql`
          query getLoggedIn {
            isLoggedIn
          }
        `,
        data: { isLoggedIn: true }
      });
    },
    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors.length > 0) {
        setMessage(graphQLErrors[0].message);
      } else if(networkError) {
        setMessage(networkError.message || "Network Error");
      } else {
        setMessage("There was an error creating a user");
      }
    }
  });

  useEffect(() => {
    if (data) {
      history.push("/home");
    }
  }, [data, history]);

  const handleSignup = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setMessage('You must enter an email');
      return; 
    }

    if (password.length === 0) {
      setMessage('You must enter a password');
      return; 
    }

    if (confirmPassword.length === 0) {
      setMessage('You must confirm your password');
      return;
    }

    if (!confirmedAge) {
      setMessage("You must be 18 or older to use this site.");
      return;
    }

    if (password !== confirmPassword) {
     setMessage('Your passwords do not match.');
     return; 
    }

    signup({ variables: { email, password, role, name: `${firstName} ${lastName}` }});
  }

  const handleRoleSelect = (e) => {
    setRole(e.target.value === "Student" ? 0 : 1);
  }

  if (loading) {
    return(
      <div>
        <Spinner type="grow" color="light" />
      </div>
    );
  }

  return(
    <Form className="landing-form" onSubmit={e => handleSignup(e)}>
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
            onChange={(e) => setFirstName(e.target.value)} />
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
            onChange={(e) => setLastName(e.target.value)} />
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
            onChange={(e) => setEmail(e.target.value)} />
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
            onChange={(e) => setPassword(e.target.value)} />
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
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='user-type' sm={2}>I am a </Label>
        <Col sm={8}>
          <Input type='select' name='user-type' id='user-type' onChange={handleRoleSelect}>
            <option>Student</option>
            <option>Teacher</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup check className="form-row check-row">
        <Input type='checkbox' name='check' id='agree-check' onChange={e => setConfirmedAge(!confirmedAge)} />
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
