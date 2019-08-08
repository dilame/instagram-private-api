const TypeDoc = require('typedoc');

const app = new TypeDoc.Application({
  experimentalDecorators: true,
  ignoreCompilerErrors: true,
  logger: 'none',
  theme: 'markdown',
  readme: 'none',
  excludePrivate: true,
  excludeProtected: true,
  excludeNotExported: true,
  target: 'ES6',
  tsconfig: './tsconfig.js'
});

const project = app.convert(app.expandInputFiles(['src']));

if (project)
  app.generateDocs(project, 'docs');
