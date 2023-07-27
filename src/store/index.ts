import { createStore, applyMiddleware } from 'redux';

import Reducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';

export const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
