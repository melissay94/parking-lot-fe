import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'; 
import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`;

const useLogin = client => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const [login, { data, loading }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
      localStorage.setItem('name', login.user.name);
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

  const handleEmailChange = e => {
    e.persist();
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    e.persist();
    setPassword(e.target.value);
  }

  const handleSubmit = e => {
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

  return {
    email,
    password,
    message,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    data,
    loading
  }
}

export default useLogin;
