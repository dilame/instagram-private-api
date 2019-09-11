import { Application } from 'typedoc';

const app = new Application({
  experimentalDecorators: true,
  ignoreCompilerErrors: false,
  listInvalidSymbolLinks: true,
  theme: 'markdown',
  readme: 'none',
  excludePrivate: true,
  excludeProtected: true,
  excludeNotExported: true,
  target: 'ES2017',
  tsconfig: './tsconfig.js',
});

const project = app.convert(app.expandInputFiles(['src']));

if (project) app.generateDocs(project, 'docs');
