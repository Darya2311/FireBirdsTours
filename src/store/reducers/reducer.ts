import {
	SET_USERS,
	DELETE_USER,
	SHOW_WINDOW,
	HIDE_WINDOW,
	FILTER_USERS,
	SET_COINSIDENCE,
	SET_ERROR,
} from '../../common/constants';
import { IStore, IUser } from '../../common/types';

const defaultState: IStore = {
	users: [],
	filteredUsers: [],
	userData: {
		address: {
			street: '',
			suite: '',
			city: '',
			zipcode: '',
			geo: {
				lat: '',
				lng: '',
			},
		},
		company: {
			name: '',
			catchPhrase: '',
			bs: '',
		},
	},
	isModalVisible: false,
	coinsidence: null,
	error: '',
};

export default function Reducer(state = defaultState, action: any) {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.payload,
				filteredUsers: [],
			};

		case DELETE_USER:
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
				filteredUsers: state.filteredUsers.filter((user) => user.id !== action.payload),
			};

		case SHOW_WINDOW:
			return {
				...state,
				isModalVisible: action.payload.isModalVisible,
				userData: action.payload.data,
			};

		case HIDE_WINDOW:
			return {
				...state,
				isModalVisible: action.payload.isModalVisible,
				userData: action.payload.data,
			};
		case FILTER_USERS:
			return {
				...state,
				filteredUsers: action.payload,
			};

		case SET_COINSIDENCE:
			return {
				...state,
				coinsidence: action.payload,
			};

		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
}

export const deleteUser = (id: number) => ({ type: 'DELETE_USER', payload: id });
export const showModalWindow = (user: IUser) => ({
	type: 'SHOW_WINDOW',
	payload: {
		data: {
			address: user.address,
			company: user.company,
		},
		isModalVisible: true,
	},
});

export const hideWindow = () => ({
	type: 'HIDE_WINDOW',
	payload: {
		data: {},
		isModalVisible: false,
	},
});

export const setCoinsidences = (coinsidence: string | null) => ({
	type: 'SET_COINSIDENCE',
	payload: coinsidence,
});

export const setError = (message: string) => ({
	type: 'SET_ERROR',
	payload: message,
});
