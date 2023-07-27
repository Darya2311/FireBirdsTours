import { useSelector } from 'react-redux';
import { IUser } from '../../common/types';
import { useAppDispatch } from '../../store';
import { deleteUser, showModalWindow } from '../../store/reducers/reducer';
import './index.scss';
import { selectCoinsidence } from '../../store/selectors';

export default function UserComponent(user: IUser) {
	const dispatch = useAppDispatch();
	const searchedValue = useSelector(selectCoinsidence);

	const isNameSuit = searchedValue && user.name.includes(searchedValue);
	const isEmailSuit = searchedValue && user.email.includes(searchedValue);
	const isUserNameSuit = searchedValue && user.username.includes(searchedValue);

	const handleClick = () => {
		dispatch(showModalWindow(user));
		document.body.style.overflow = 'hidden';
	};
	const handleDelete = () => {
		dispatch(deleteUser(user.id));
	};

	return (
		<div className="userContainer">
			<div className="mainInformation" onClick={handleClick}>
				<p className={isNameSuit ? 'userInfo userInfoColored' : 'userInfo'}>
					Name: <span>{user.name}</span>
				</p>
				<p className={isUserNameSuit ? 'userInfo userInfoColored' : 'userInfo'}>
					Username: <span>{user.username}</span>
				</p>
				<p className={isEmailSuit ? 'userInfo userInfoColored' : 'userInfo'}>
					Email: <span>{user.email}</span>
				</p>
			</div>

			<button type="button" onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
}
