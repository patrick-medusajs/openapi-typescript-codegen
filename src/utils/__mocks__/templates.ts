import { Templates } from '../registerHandlebarTemplates';

export const templates: Templates = {
    indexes: {
        index: () => 'index',
        indexModels: () => 'indexModels',
        indexServices: () => 'indexServices',
        indexHooks: () => 'indexHooks',
    },
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
