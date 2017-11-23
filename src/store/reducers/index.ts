import {combineReducers} from 'redux';

import {createBoolReducer} from './bool';

export interface StoreInterface {
    loading: boolean;
}

export default combineReducers<StoreInterface>({

    loading: createBoolReducer('loading')
});
