import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { useApolloClient } from '@apollo/react-hooks';

import useLogin from '../../hooks/mutations/useLogin';

export default function LoginForm() {

  const client = useApolloClient();
  const { 
    email,
    password,
    message,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    data,
    loading
  } = useLogin(client);
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
    )
  }

  return (
    <Form className="landing-form" onSubmit={handleSubmit}>
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
            onChange={handleEmailChange} />
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
            onChange={handlePasswordChange} />
        </Col>
      </FormGroup>
      <div  className="form-row">
        <Col sm={1}></Col>
        <h6 className="error">{message}</h6>
        <Button>Login</Button>
      </div>
    </Form>
  );
}
