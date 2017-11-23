import {runInitializers, Initializer} from '$src/application';

test('runInitializers', () => {

    expect.assertions(4);

    const app = {
        states: {
            count: <any>undefined
        }
    };

    let initializers: Initializer<any>[] = [
        {
            name: 'sync 1',
            initialize: (application) => {

                expect(application.states.count).toBeUndefined();

                application.states.count = 1;
            }
        },
        {
            name: 'async 1',
            initialize: (application) => {

                expect(application.states.count).toBe(1);

                return new Promise<any>((resolve, reject) => {

                    setTimeout(() => {
                        application.states.count += 1;
                        resolve();
                    }, 10);
                });
            }
        },
        {
            name: 'sync 2',
            initialize: (application) => {
                expect(application.states.count).toBe(2);

                application.states.count -= 100;
            }
        }
    ];

    return runInitializers(initializers, 0, app).then(() => {

        expect(app.states.count).toBe(-98);
    });
});
