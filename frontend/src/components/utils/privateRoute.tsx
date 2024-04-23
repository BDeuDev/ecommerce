import React from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  //@ts-ignore
  const { isAuthenticated} = useSelector((state) => state.auth);
  console.log(isAuthenticated)
  /* const dispatch = useDispatch(); */
 /* const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); */

 
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;