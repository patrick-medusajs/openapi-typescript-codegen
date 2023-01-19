import type { Client } from '../../client/interfaces/Client';
import { HttpClient } from '../../HttpClient';
import { Indent } from '../../Indent';
import { mkdir, rmdir, writeFile } from '../fileSystem';
import { writeClient } from '../writeClient';
import { templates } from '../__mocks__/templates';

jest.mock('./fileSystem');

describe('writeClient', () => {
    it('should write to filesystem', async () => {
        const client: Client = {
            server: 'http://localhost:8080',
            version: 'v1',
            models: [],
            services: [],
        };

        await writeClient(
            client,
            templates,
            './dist',
            HttpClient.FETCH,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            Indent.SPACE_4,
            'Service',
            'AppClient'
        );

        expect(rmdir).toBeCalled();
        expect(mkdir).toBeCalled();
        expect(writeFile).toBeCalled();
    });
});
