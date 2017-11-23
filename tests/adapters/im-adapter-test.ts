import IMAdapter from '$src/adapters/im-adapter';

test('im-adapter headers', () => {

    let adapter = new IMAdapter({

    });

    expect(adapter.headers).toEqual({
        'X-Cookie': 'uuid cookie',
        'X-Company-ID': 'company id',
        'X-Lang': 'lang',
        'X-Platform': 'web',
        'Content-Type': 'application/json'
    });
});
