import { Route, Switch } from 'react-router';
import React, { Suspense } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

const LoginContainer = React.lazy(() => import('../login/Login'));
const UsersContainer = React.lazy(() => import('../users/Users'));
const ErrorContainer = React.lazy(() => import('../error/Error'));

const Routes: React.FunctionComponent = () => {
    return (
        <Suspense fallback={<Spinner lightBg={true}/>}>
            <Switch>
                <PrivateRoute path='/users' exact={true} component={UsersContainer}></PrivateRoute>
                <Route path='/login' exact={true} component={LoginContainer}></Route>
                <Route path='/error' exact={true} component={ErrorContainer}></Route>
                <PrivateRoute path='/' exact={true} component={UsersContainer}></PrivateRoute>
            </Switch>
        </Suspense>
    )
}

export default Routes