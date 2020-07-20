import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default function LoginForm() {

  const client = useApolloClient();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const [login, { data, loading }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
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

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setMessage("Please enter a email");
      return;
    }

    if (password.length === 0) {
      setMessage("Please enter a password");
      return;
    }

    login({ variables: { email, password }});
  }

  if (loading) {
    return(
      <div>
        <Spinner type="grow" color="light" />
      </div>
    )
  }

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
        <Col sm={1}></Col>
        <h6 className="error">{message}</h6>
        <Button>Login</Button>
      </div>
    </Form>
  );
}
