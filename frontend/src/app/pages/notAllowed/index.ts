import { useEffect } from 'react';

const NotAllowed = (props) => {
  useEffect(() => {
    props.history.push('/profile');
  }, []);
};

export default NotAllowed;