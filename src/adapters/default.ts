import $ from 'jquery';

interface RequestOptions {
    url?: string;
    method?: HTTP_METHODS;
    contentType?: string;
    dataType?: string;
    context?: any;
    headers?: any;
    beforeSend?: Function;
    data?: any;
}

interface RequestResponse {
    [key: string]: any;
}

interface RequestHeaders {
    [key: string]: any;
}

export type HTTP_METHODS = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export default class DefaultAdapter {

    namespace: string = '';
    host: string = '';
    headers: RequestHeaders;

    constructor (props?: any) {

        Object.assign(this, props);
    }

    prepareJqueryAjaxHash (request: RequestOptions = {}): RequestOptions {

        let hash: RequestOptions = {...request};

        hash.context = this;

        if (!hash.dataType) {
            hash.dataType = 'json';
        }

        if (request.data) {
            if (request.method && request.method !== 'GET' && !request.contentType) {
                hash.contentType = 'application/json; charset=utf-8';
                hash.data = JSON.stringify(request.data);
            }
        }

        if (this.headers) {
            hash.headers = {
                ...this.headers,
                ...hash.headers
            };
        }

        return hash;
    }

    request (url: string, options: RequestOptions = {}, method: HTTP_METHODS = 'GET'): Promise<RequestResponse | null> {

        let hash;

        if (url) {
            options.url = url;
        }

        options.method = method;
        hash = this.prepareJqueryAjaxHash(options);

        return new Promise(function (resolve, reject) {

            hash.success = function (payload, textStatus, jqXHR) {

                resolve(payload);
            };

            hash.error = function (jqXHR, textStatus, err) {

                reject(err);
            };

            $.ajax(hash);
        });
    }
}
