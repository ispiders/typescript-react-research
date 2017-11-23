import React from 'react';
import {Store} from 'redux';
import {render} from 'react-dom';
import initializers from './initializers';
import Root from './root';

export interface Initializer<T> {
    name?: string;
    initialize (app: T): any;
}

interface applicationStates {
    applicationContainer?: Element,
    [key: string]: any
}

export function runInitializers<T> (initializers: Initializer<T>[], index: number = 0, app: any): Promise<any> {

    if (!initializers || !initializers.length) {

        return Promise.resolve();
    }

    return Promise.resolve(initializers[index].initialize(app)).then((r) => {

        if (index + 1 < initializers.length) {
            return runInitializers(initializers, index + 1, app);
        }
        else {
            return r;
        }
    });
}

interface ApplicationStates {
    applicationContainer?: Element;
    env?: any;
}

export default class Application {

    store: Store<any>;
    states: ApplicationStates;

    constructor (store: Store<any>, states: ApplicationStates) {

        this.store = store;
        this.states = states;
    }

    initializeWith (initializers: Initializer<Application>[]): Promise<any> {

        return runInitializers(initializers, 0, this);
    }

    render (container: Element = document.body): void {

        render(<Root store={this.store} />,
            container
        );
    }

    start (): void {

        this.initializeWith(initializers).then(() => {

            this.render(this.states.applicationContainer);
        });
    }

    close () {
        // todo
        console.log('close');
    }

    openNewWindow () {
        // todo
        console.log('openNewWindow');
    }
}
