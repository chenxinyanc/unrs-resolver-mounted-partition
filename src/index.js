import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ResolverFactory } from "unrs-resolver";

const resolver = new ResolverFactory({
  tsconfig: {
    configFile: 'tsconfig.json',
  },
});
const dir = path.resolve(fileURLToPath(import.meta.url), '..');
console.log("dir: ", dir);

const resolved = resolver.sync(dir, './mount-root/foo.ts');
console.log(resolved);
