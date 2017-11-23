export default {
    name: 'env detector',
    initialize: (app) => {

        app.states.env = {
            inFrame: window.top !== window
        };
    }
};
