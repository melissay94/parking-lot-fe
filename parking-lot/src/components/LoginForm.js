import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import "../styles/LandingForm.css";

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const client = useApolloClient();
  const [login, { data, loading }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
      client.writeData({ data: { isLoggedIn: true }});
    }, 
    onError(error) {
      setMessage(error.message);
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();

    login({ variables: { email, password }});
  }

  if (loading) {
    setMessage("Loading...");
  }

  if (data) return <Redirect to="/home" />

  return (
    <Form className="landing-form" onSubmit={e => handleLogin(e)}>
      <h3>Welcome Back!</h3>
      <FormGroup row className="form-row">
        <Col sm={1}></Col>
        <Label for='email' sm={2}>Email</Label>
        <Col sm={8}>
          <Input 
            type='email' 
            name='email' 
            id='login-email' 
            placeholder='Enter Email'
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup row  className="form-row">
        <Col sm={1}></Col>
        <Label for='password' sm={2}>Password</Label>
        <Col sm={8}>
          <Input 
            type='password' 
            name='password' 
            id='login-password' 
            placeholder='Enter Password'
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </Col>
      </FormGroup>
      <div  className="form-row">
        <h6>{message}</h6>
        <Button>Login</Button>
      </div>
    </Form>
  );
}
