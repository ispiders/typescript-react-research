import {createBoolReducer} from '$src/store/reducers/bool';

test('bool reducer', () => {

    let state = false;
    const reducer = createBoolReducer('test');

    state = reducer(state, {type: 'test-on'});

    expect(state).toBe(true);

    state = reducer(state, {type: 'wrong type'});

    expect(state).toBe(true);

    state = reducer(state, {type: 'test-off'});

    expect(state).toBe(false);
});
