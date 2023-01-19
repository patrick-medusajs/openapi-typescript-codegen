import { EOL } from 'os';

import type { Service } from '../../client/interfaces/Service';
import { HttpClient } from '../../HttpClient';
import { Indent } from '../../Indent';
import { writeFile } from '../fileSystem';
import { writeClientServices } from '../writeClientServices';
import { templates } from '../__mocks__/templates';

jest.mock('./fileSystem');

describe('writeClientServices', () => {
    it('should write to filesystem', async () => {
        const services: Service[] = [
            {
                name: 'User',
                operations: [],
                imports: [],
            },
        ];

        await writeClientServices(services, templates, '/', HttpClient.FETCH, false, false, Indent.SPACE_4, 'Service');

        expect(writeFile).toBeCalledWith('/UserService.ts', `service${EOL}`);
    });
});
