import { resolve } from 'path';

import type { Service } from '../client/interfaces/Service';
import {mkdir, writeFile} from './fileSystem';
import { formatCode as f } from './formatCode';
import { formatIndentation as i } from './formatIndentation';
import type { Indent} from "../Indent";
import type { Templates } from './registerHandlebarTemplates';

/**
 * Generate Services using the Handlebar template and write to disk.
 * @param services Array of Services to write
 * @param templates The loaded handlebar templates
 * @param outputPath Directory to write the generated files to
 * @param clientName Custom client class name
 */
export const writeClientHooks = async (
    services: Service[],
    templates: Templates,
    outputPath: string,
    indent: Indent,
    clientName?: string
): Promise<void> => {
    for (const service of services) {
        await mkdir(resolve(outputPath, `./use${service.name}`));
        const file = resolve(outputPath, `./use${service.name}/index.ts`);
        const templateResult = templates.exports.hook({
            ...service,
            clientName
        });
        await writeFile(file, i(f(templateResult), indent));
    }
};
