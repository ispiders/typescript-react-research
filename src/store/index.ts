import {createStore} from 'redux';
import reducer, {StoreInterface} from './reducers';

export let initStore = function (initialState: StoreInterface) {

    return createStore<StoreInterface>(reducer, initialState);
};

export {StoreInterface} from './reducers';

export default initStore({
    loading: false
});
