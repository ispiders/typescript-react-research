import React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {HashRouter as AppRouter} from 'react-router-dom';

import App from '$src/components/app/index';

interface RootProps {
    store: Store<any>;
}

export default class Root extends React.Component<RootProps> {

    render () {

        let store = this.props.store;

        return (
            <Provider store={store}>
                <AppRouter>
                    <App />
                </AppRouter>
            </Provider>
        );
    }
}
