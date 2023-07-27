import axios from 'axios';

import { SET_USERS, URL, FILTER_USERS } from '../../common/constants';
import { AppDispatch } from '../index';
import { IUser } from '../../common/types';
import { setError } from '../reducers/reducer';

export const getUsersMiddleware = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const responce = await axios.get(URL);
			dispatch({ type: SET_USERS, payload: responce.data });
		} catch (err: any) {
			dispatch(setError(err.message));
		}
	};
};

export const filterUsersMiddleWare = (data: string, users: IUser[]) => {
	return (dispatch: AppDispatch) => {
		const people = users.filter(
			(user) =>
				user.name.includes(data) || user.username.includes(data) || user.email.includes(data),
		);
		dispatch({ type: FILTER_USERS, payload: people });
	};
};
