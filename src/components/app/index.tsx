import * as React from 'react';
import {connect} from 'react-redux';

import Loading from './loading';
import {StoreInterface} from '$src/store';

interface StateProps {
    loading: boolean;
}

interface OwnProps {

}

type AppProps = StateProps & OwnProps;

export let AppLayout = (props: AppProps) => {

    return (
        <div>
            {props.loading && <Loading />}
        </div>
    );
};

let App = connect<StateProps, {}, OwnProps, StoreInterface>(
    (state, ownProps) => {

        return {
            loading: state.loading
        };
    }
)(AppLayout);

export default App;
