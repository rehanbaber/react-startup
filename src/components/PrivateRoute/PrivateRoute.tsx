import React, { useContext } from 'react';
import { RouteProps, Route, Redirect } from 'react-router';
import { AuthContext } from '../../containers/auth/AuthContext';

interface PrivateRouteProps extends RouteProps {
    component: any;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({component: Component, ...rest}) => {
    const authValues = useContext(AuthContext);
    return (
        <Route {...rest} render={(props) => authValues.checkAuthentication() ? <Component {...props}/> : <Redirect to="/login"/>}/>
    );
}

export default PrivateRoute;