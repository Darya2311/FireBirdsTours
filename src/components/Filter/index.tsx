import { useEffect, useState } from 'react';
import './index.scss';
import { useAppDispatch } from '../../store';
import { filterUsersMiddleWare, getUsersMiddleware } from '../../store/middlewares';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../store/selectors';
import { setCoinsidences } from '../../store/reducers/reducer';

export default function Filter() {
	const dispatch = useAppDispatch();

	const users = useSelector(selectAllUsers);
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleClick = () => {
		setValue('');
		dispatch(getUsersMiddleware());
		dispatch(setCoinsidences(null));
	};

	useEffect(() => {
		dispatch(filterUsersMiddleWare(value, users));
		dispatch(setCoinsidences(value));
	}, [value]);

	return (
		<div className="filterContainer">
			<p className="header">Just enter email, name or username to find coincidences:</p>
			<input
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
				placeholder="Type something here"
				value={value}
				type="text"
			/>
			<button onClick={handleClick}>Reset</button>
		</div>
	);
}
