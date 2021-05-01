import { Route, Redirect } from 'react-router-dom';

export const ConditionalRoute = ({
  component: Component,
  redirectTo,
  canActivate,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        canActivate ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};
