import { Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks/hook';
import { selectIsLoggedIn } from './redux/Authorization/selectors';

interface PrivateRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);


    console.log(isLoggedIn)
  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};