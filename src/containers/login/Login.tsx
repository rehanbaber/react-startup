import React, { useEffect, useContext, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import axios from '../../axios/axios';
import { AuthContext } from '../auth/AuthContext';
import { LOGIN } from '../../constants';
import LoginForm from '../../components/LoginForm/LoginForm';
import Spinner from '../../components/Spinner/Spinner';

export interface LoginFormInterface { 
    email: string;
    password: string;
}

const LoginContainer: React.FC<RouteComponentProps> = ({ history }) => {
    const defaultFormState: LoginFormInterface = {
        email: '',
        password: ''
    }
    const authContext = useContext(AuthContext);
    const [formState, setFormState] = useState<LoginFormInterface>(defaultFormState);
    const [isLoading, setLoading] = useState<boolean>(false);

    const onLogin = (values: LoginFormInterface) => {
        setLoading(true);
        axios.post(LOGIN, values).then((response) => {
            console.log('response', response)
            authContext.authenticateUser(response.data);
            history.push('/');
        }).catch((error) => {
            console.log('form error', error);
            setLoading(false);
            setFormState(values);
        })
    }

    useEffect(() => {
        if(authContext.checkAuthentication()) {
            history.push('/');
        }
    })

    return (
        isLoading? <Spinner lightBg={true}></Spinner> :
            <LoginForm onLogin={onLogin} currentFormState={formState}></LoginForm>
    );
}

export default withRouter(LoginContainer);