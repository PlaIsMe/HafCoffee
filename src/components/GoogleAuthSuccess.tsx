import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      console.log("Got token " + token + " verify now!!!")
    }

    // navigate('/');
  }, [navigate]);

  return null;
};

export default GoogleAuthSuccess;
