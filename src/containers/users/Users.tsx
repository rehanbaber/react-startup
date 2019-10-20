import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps } from "react-router";
import { User } from "../../models/user.model";
import UsersList from '../../components/UsersList/UsersList';
import axios from '../../axios/axios';
import Spinner from '../../components/Spinner/Spinner';
import { USERS } from '../../constants';

const UsersContainer: React.FunctionComponent<RouteComponentProps> = ({history}) => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get(USERS)
            .then( response => {
                setLoading(false);
                setUsers(response.data);
            })
    }, [])

    const onEditClick = useCallback((id: string) => {
        history.push('/edituser/' + id);
    }, [history])

    return (
        isLoading ? <Spinner lightBg={true}></Spinner> :
        <UsersList onEditClick={onEditClick} users={users}></UsersList>
    );
}

export default UsersContainer;