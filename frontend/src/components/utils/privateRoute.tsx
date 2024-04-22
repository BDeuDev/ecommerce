import React from 'react';
import { Navigate } from "react-router-dom";
import { RouteProps } from 'react-router-dom';
/* import { useSelector } from 'react-redux';
import { RootState } from '../store';  */// Ajusta la importación según tu configuración de Redux

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
 /* const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); */
 const isAuthenticated = false
 
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;