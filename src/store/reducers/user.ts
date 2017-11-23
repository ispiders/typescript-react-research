
export interface User {
    id?: string;
    name: string;
}

export interface UserAction {
    type: symbol;
    data?: any;
    [prop: string]: any;
}

export const UPDATE_USER = Symbol('update_user');

export let userReducer = (state: User, action: UserAction): User => {

    if (action.type === UPDATE_USER) {

        return {
            ...state,
            ...action.data
        };
    }

    return state;
};

interface UserListAction {
    type: symbol;
    data?: any;
}

export const ADD_USER = Symbol('add_user');
export const DELETE_USER = Symbol('delete_user');

export let userListReducer = (state: User[] = [], action: UserListAction): User[] => {

    if (action.type === ADD_USER) {

        return [
            ...state,
            action.data
        ];
    }
    else if (action.type === DELETE_USER) {

        return state.filter(function (user) {

            return user.id !== action.data;
        });
    }

    return state;
};
