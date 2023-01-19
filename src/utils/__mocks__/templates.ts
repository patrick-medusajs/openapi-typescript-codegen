import { Templates } from '../registerHandlebarTemplates';

export const templates: Templates = {
    index: () => 'index',
    client: () => 'client',
    useClient: () => 'useClient',
    exports: {
        model: () => 'model',
        schema: () => 'schema',
        service: () => 'service',
        hook: () => 'hook',
    },
    core: {
        settings: () => 'settings',
        apiError: () => 'apiError',
        apiRequestOptions: () => 'apiRequestOptions',
        apiResult: () => 'apiResult',
        cancelablePromise: () => 'cancelablePromise',
        request: () => 'request',
        baseHttpRequest: () => 'baseHttpRequest',
        httpRequest: () => 'httpRequest',
        hookUtils: () => 'hookUtils',
    },
};
