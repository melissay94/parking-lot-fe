import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_LOTS = gql`
  query {
    currentUser {
      lots {
        name
        description
      }
    }
  }
`;

const useQueryUserLots = () => {
  const { data, loading, error } = useQuery(GET_LOTS);

  return {
    data, 
    loading,
    error
  }
}

export default useQueryUserLots;
