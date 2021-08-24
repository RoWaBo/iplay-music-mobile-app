import { navigate } from '@reach/router';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Callback = ({ location }) => {
  const { setAuthToken } = useAuth();

  let code = new URLSearchParams(location.search).get('code');
  let state = new URLSearchParams(location.search).get('state');

  useEffect(() => {
    axios.post('/.netlify/functions/token',
        JSON.stringify({
          code,
          state,
        }))
      .then(response => {
        setAuthToken(response.data);
        navigate('/featured');
      });
  }, [setAuthToken, code, state]);

  return null;
};

export default Callback;
