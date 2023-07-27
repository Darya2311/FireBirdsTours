import './index.scss';
import { useSelector } from 'react-redux';
import { selectModalVisibility } from '../../store/selectors';
import { useAppDispatch } from '../../store';
import { IUserData } from '../../common/types';
import { hideWindow } from '../../store/reducers/reducer';

export default function ModalWindow({ address, company }: IUserData) {
	const dispatch = useAppDispatch();
	const isVisible = useSelector(selectModalVisibility);

	const handleWindow = () => {
		dispatch(hideWindow());
	};

	return (
		<div className={isVisible ? 'showWindow' : 'hideWindow'}>
			<div className="window">
				<div className="closeBtn" onClick={handleWindow} />

				<div className="info">
					<div className="addressInfo">
						Adress:
						<p className="informationParagraph">
							{address?.city},{address?.street}
						</p>
						<p className="informationParagraph">{address?.zipcode}</p>
						<p className="informationParagraph">
							{address?.geo.lat}, {address?.geo.lng}
						</p>
					</div>
					<div className="companyInfo">
						Company:
						<p className="informationParagraph">{company?.name}</p>
						<p className="informationParagraph">{company?.bs}</p>
						<p className="informationParagraph">{company?.catchPhrase}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
