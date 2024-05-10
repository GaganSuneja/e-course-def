import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const OpenRoute = () => {
  const isUserLogged = useSelector((state) => state.user.userLoggedIn);
  return (
    <Route
      render={() =>
        isUserLogged === true ? (
          <Redirect
            to={{ pathname: '/module/1', state: { from: props.location } }}
          />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default OpenRoute;
