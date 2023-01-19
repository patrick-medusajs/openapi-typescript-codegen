import { EOL } from 'os';

import type { Model } from '../../client/interfaces/Model';
import { HttpClient } from '../../HttpClient';
import { Indent } from '../../Indent';
import { writeFile } from '../fileSystem';
import { writeClientSchemas } from '../writeClientSchemas';
import { templates } from '../__mocks__/templates';

jest.mock('./fileSystem');

describe('writeClientSchemas', () => {
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

        await writeClientSchemas(models, templates, '/', HttpClient.FETCH, false, Indent.SPACE_4);

        expect(writeFile).toBeCalledWith('/$User.ts', `schema${EOL}`);
    });
});
