import {Reducer} from 'redux';

export let createBoolReducer = (aliasName: string): Reducer<boolean> => {

    let actions = {
        on: aliasName + '-on',
        off: aliasName + '-off'
    };

    return (state: boolean = false, action): boolean => {

        switch (action.type) {
            case actions.on:
                return true;
            case actions.off:
                return false;
        }

        return state;
    };
};

export default createBoolReducer('default');
