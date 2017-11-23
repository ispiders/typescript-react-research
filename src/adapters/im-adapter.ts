import DefaultAdapter from './default';

export default class IMAdapter extends DefaultAdapter {

    constructor (...args) {

        super(...args);

        this.headers = Object.assign(this.headers || {}, {
            'X-Cookie': 'uuid cookie',
            'X-Company-ID': 'company id',
            'X-Lang': 'lang',
            'X-Platform': 'web',
            'Content-Type': 'application/json'
        });
    }
}
