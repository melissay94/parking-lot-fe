import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'; 
import gql from 'graphql-tag';

const SIGNUP_USER = gql`
  mutation signup($email: String!, $password: String!, $name: String, $role: Int!) {
    signup(email: $email, password: $password, name: $name, role: $role) {
      token
      user {
        name
      }
    }
  }
`;

const useSignup = client => {
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
      localStorage.setItem('name', signup.user.name);
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

  const handleFirstNameChange = e => {
    e.persist();
    setFirstName(e.target.value);
  }

  const handleLastNameChange = e => {
    e.persist();
    setLastName(e.target.value);
  }

  const handlePasswordChange = e => {
    e.persist();
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = e => {
    e.persist();
    setConfirmPassword(e.target.value);
  }

  const handleRoleChange = e => {
    e.persist();
    setRole(e.target.value === "Student" ? 0 : 1);
  }

  const handleAgeConfirmChange = e => {
    e.persist();
    setConfirmedAge(!confirmedAge);
  }

  const handleSubmit = e => {
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

  return {
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
  }
}

export default useSignup;
