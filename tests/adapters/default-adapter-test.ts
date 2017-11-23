import DefaultAdapter, {HTTP_METHODS} from '$src/adapters/default';

test('default-adapter should fail when request /404', () => {

    expect.assertions(1);

    let adapter = new DefaultAdapter({

    });

    return expect(adapter.request('/404', {
        data: {
            params: true
        }
    })).rejects.toBeTruthy();
});

test('adapter.prepareJqueryAjaxHash', () => {

    let adapter = new DefaultAdapter({
        headers: {
            'x-test': 'test',
            'content-type': 'text/plain'
        }
    });

    let request = {
        url: '/request',
        method: <HTTP_METHODS>'GET',
        headers: {
            'content-type': 'application/stream',
            'no-cache': '1'
        }
    };

    expect(adapter.prepareJqueryAjaxHash(request)).toMatchObject({
        url: '/request',
        method: 'GET',
        dataType: 'json',
        context: adapter,
        headers: {
            'x-test': 'test',
            'content-type': 'application/stream',
            'no-cache': '1'
        }
    });
});
