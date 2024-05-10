import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { disableFooter, disableHeader } from './actions';

//constants
import { USER_ROLES } from '../../constants';

type State = {
  user: {
    userLoggedIn: boolean;
    userProfile: {
      role?: USER_ROLES;
    };
  };
};

const SecuredRoute = ({
  allowedTo,
  component: Component,
  isHeaderDisabled,
  isFooterDisabled,
  ...rest
}: {
  path: string;
  exact?: boolean;
  allowedTo: Array<USER_ROLES>;
  component: (props: any) => JSX.Element;
  isHeaderDisabled?: boolean;
  isFooterDisabled?: boolean;
}) => {
  const userLoggedIn = useSelector((state: State) => state.user.userLoggedIn);
  const userRole = useSelector((state: State) => state.user.userProfile?.role);
  const dispatch = useDispatch();
  if (isHeaderDisabled) {
    dispatch(disableHeader());
  }

  if (isFooterDisabled) {
    dispatch(disableFooter());
  }

  return (
    <Route
      {...rest}
      render={(props: { location: string }) =>
        userLoggedIn === true && allowedTo.includes(userRole) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default SecuredRoute;
