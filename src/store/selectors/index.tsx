import { createSelector } from 'reselect';
import { IStore } from '../../common/types';

export const selecState = createSelector(
	(state: IStore) => state,
	(state) => state,
);

export const selectAllUsers = createSelector(selecState, (state) => state.users);
export const selectFilteredUsers = createSelector(selecState, (state) => state.filteredUsers);
export const selectModalVisibility = createSelector(selecState, (state) => state.isModalVisible);
export const selectUsersData = createSelector(selecState, (state) => state.userData);
export const selectCoinsidence = createSelector(selecState, (state) => state.coinsidence);
export const selectError = createSelector(selecState, (state) => state.error);
