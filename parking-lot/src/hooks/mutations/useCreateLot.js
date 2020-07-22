import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CREATE_LOT = gql`
  mutation {
    createLot($name: String!, $description: String) {

    }
  }
`;
