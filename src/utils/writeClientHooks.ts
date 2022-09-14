import { resolve } from 'path';

import type { Service } from '../client/interfaces/Service';
import {mkdir, writeFile} from './fileSystem';
import type { HttpClient } from '../HttpClient';
import { formatCode as f } from './formatCode';
import { formatIndentation as i } from './formatIndentation';
import type { Indent} from "../Indent";
import type { Templates } from './registerHandlebarTemplates';

/**
 * Generate Services using the Handlebar template and write to disk.
 * @param services Array of Services to write
 * @param templates The loaded handlebar templates
 * @param outputPath Directory to write the generated files to
 * @param httpClient The selected httpClient (fetch, xhr, node or axios)
 * @param useUnionTypes Use union types instead of enums
 * @param useOptions Use options or arguments functions
 * @param indent Indentation options (4, 2 or tab)
 * @param postfix Service name postfix
 * @param clientName Custom client class name

 */
export const writeClientHooks = async (
    services: Service[],
    templates: Templates,
    outputPath: string,
    httpClient: HttpClient,
    useUnionTypes: boolean,
    useOptions: boolean,
    indent: Indent,
    postfix: string,
    clientName?: string
): Promise<void> => {
    for (const service of services) {
        await mkdir(resolve(outputPath, `./use${service.name}`));
        const file = resolve(outputPath, `./use${service.name}/index.ts`);
        const templateResult = templates.exports.hook({
            ...service,
            httpClient,
            useUnionTypes,
            useOptions,
            postfix,
            clientName
        });
        await writeFile(file, i(f(templateResult), indent));
    }
};
