// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as UnrsResolver from "unrs-resolver";
import * as OxcResolver from "oxc-resolver";

const dir = path.resolve(fileURLToPath(import.meta.url), '..');
console.log("Current directory: ", dir);

const unrsResolver = new UnrsResolver.ResolverFactory({
  tsconfig: {
    configFile: path.resolve(dir, 'tsconfig.json'),
  },
});
const oxcResolver = new OxcResolver.ResolverFactory({
  tsconfig: {
    configFile: path.resolve(dir, 'tsconfig.json'),
  },
});

console.log("unrs-resolver:", unrsResolver.sync(dir, './mount-root/foo.ts'));
console.log("oxc-resolver:", oxcResolver.sync(dir, './mount-root/foo.ts'));
