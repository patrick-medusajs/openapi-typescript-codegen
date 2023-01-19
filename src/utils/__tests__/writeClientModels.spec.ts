import { EOL } from 'os';

import type { Model } from '../../client/interfaces/Model';
import { HttpClient } from '../../HttpClient';
import { Indent } from '../../Indent';
import { writeFile } from '../fileSystem';
import { writeClientModels } from '../writeClientModels';
import { templates } from '../__mocks__/templates';

jest.mock('./fileSystem');

describe('writeClientModels', () => {
    it('should write to filesystem', async () => {
        const models: Model[] = [
            {
                spec: {},
                export: 'interface',
                name: 'User',
                type: 'User',
                base: 'User',
                template: null,
                link: null,
                description: null,
                isDefinition: true,
                isReadOnly: false,
                isRequired: false,
                isNullable: false,
                imports: [],
                enum: [],
                enums: [],
                properties: [],
            },
        ];

        await writeClientModels(models, templates, '/', HttpClient.FETCH, false, Indent.SPACE_4);

        expect(writeFile).toBeCalledWith('/User.ts', `model${EOL}`);
    });
});
