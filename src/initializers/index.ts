import envDetector from './env';

export default [{
    name: 'test initializer',
    initialize: function () {

        console.log('debug: initializers');
    }
}, envDetector];
