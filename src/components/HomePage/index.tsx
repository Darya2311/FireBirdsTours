import ModalWindow from '../ModalWindow';
import UserList from '../UserList';
import { useSelector } from 'react-redux';
import './index.scss';
import { selectError, selectUsersData } from '../../store/selectors';
import Filter from '../Filter';

export default function HomePage() {
	const { address, company } = useSelector(selectUsersData);
	const error = useSelector(selectError);

	return (
		<div className="container">
			{!error ? (
				<>
					<Filter />
					<UserList />
					<ModalWindow address={address} company={company} />
				</>
			) : (
				<p className="error">{error}</p>
			)}
		</div>
	);
}
