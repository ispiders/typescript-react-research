import {userListReducer, userReducer, ADD_USER, DELETE_USER, UPDATE_USER} from '$src/store/reducers/user';

test('userListReducer', () => {

    let users = [];

    let afterAdd = userListReducer(users, {type: ADD_USER, data: {name: 'add 1', id: 1}});

    afterAdd = userListReducer(afterAdd, {type: ADD_USER, data: {name: 'add 2', id: 2}});

    let afterDelete = userListReducer(afterAdd, {type: DELETE_USER, data: 1});

    expect(users.length).toBe(0);
    expect(afterAdd.length).toBe(2);
    expect(afterDelete.length).toBe(1);

    let user = afterDelete[0];

    user = userReducer(user, {type: UPDATE_USER, data: {name: 'after update'}});

    expect(afterDelete[0].name).toBe('add 2');
    expect(user.name).toBe('after update');
});
