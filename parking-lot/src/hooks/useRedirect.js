import { useEffect } from 'react';

const useRedirect = (isLoggedIn, history) => {

  useEffect(() => {
    const path = isLoggedIn ? "/home" : "/";
    history.push(path);
  }, [isLoggedIn, history]);
}

export default useRedirect;
