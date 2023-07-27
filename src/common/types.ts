export interface IAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: {
		lat: string;
		lng: string;
	};
}

export interface ICompany {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}

export interface IUserData {
	address: IAddress;
	company: ICompany;
}

export interface IErrorMessage {
	message: string;
}

export interface IStore {
	users: IUser[];
	filteredUsers: IUser[];
	userData: IUserData;
	isModalVisible: boolean;
	coinsidence: string | null;
	error: string;
}
