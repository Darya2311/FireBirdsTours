import { useEffect } from 'react';
import { getUsersMiddleware } from '../../store/middlewares';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectAllUsers, selectFilteredUsers, selectCoinsidence } from '../../store/selectors';
import './index.scss';
import UserComponent from '../User';
import Hint from '../Hint';

export default function UserList() {
	const dispatch = useAppDispatch();
	const users = useSelector(selectAllUsers);
	const filteredUsers = useSelector(selectFilteredUsers);
	const coinsidence = useSelector(selectCoinsidence);

	const showHint = coinsidence && !filteredUsers?.length;
	const showUsers = !filteredUsers?.length && !coinsidence;
	const showFilteredUsers = filteredUsers?.length > 0;

	useEffect(() => {
		dispatch(getUsersMiddleware());
	}, []);

	return (
		<div className="listContainer">
			{showHint && <Hint />}
			{showUsers && users?.map((user) => <UserComponent key={user.id} {...user} />)}
			{showFilteredUsers && filteredUsers.map((user) => <UserComponent key={user.id} {...user} />)}
		</div>
	);
}
