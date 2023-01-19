import { EOL } from 'os';

import type { Client } from '../../client/interfaces/Client';
import { HttpClient } from '../../HttpClient';
import { Indent } from '../../Indent';
import { writeFile } from '../fileSystem';
import { writeClientCore } from '../writeClientCore';
import { templates } from '../__mocks__/templates';

jest.mock('./fileSystem');

describe('writeClientCore', () => {
    it('should write to filesystem', async () => {
        const client: Client = {
            server: 'http://localhost:8080',
            version: '1.0',
            models: [],
            services: [],
        };

        await writeClientCore(client, templates, '/', HttpClient.FETCH, Indent.SPACE_4);

        expect(writeFile).toBeCalledWith('/OpenAPI.ts', `settings${EOL}`);
        expect(writeFile).toBeCalledWith('/ApiError.ts', `apiError${EOL}`);
        expect(writeFile).toBeCalledWith('/ApiRequestOptions.ts', `apiRequestOptions${EOL}`);
        expect(writeFile).toBeCalledWith('/ApiResult.ts', `apiResult${EOL}`);
        expect(writeFile).toBeCalledWith('/CancelablePromise.ts', `cancelablePromise${EOL}`);
        expect(writeFile).toBeCalledWith('/request.ts', `request${EOL}`);
    });
});
