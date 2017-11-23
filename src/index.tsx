import Application from './application';
import store from './store';

const app = new Application(store, {
    applicationContainer: document.getElementById('application-container') as Element
});

app.start();

// 开放到全局方便debug
declare global {

    interface Window {
        app: Application
    }
}

window.app = app;
