import type { Client } from '../../client/interfaces/Client';
import { writeFile } from '../fileSystem';
import { writeClientIndex } from '../writeClientIndex';
import { templates } from '../__mocks__/templates';

jest.mock('./fileSystem');

describe('writeClientIndex', () => {
    it('should write to filesystem', async () => {
        const client: Client = {
            server: 'http://localhost:8080',
            version: '1.0',
            models: [],
            services: [],
        };

        await writeClientIndex(client, templates, '/', true, true, true, true, true, true, 'Service', '');

        expect(writeFile).toBeCalledWith('/index.ts', 'index');
    });
});
