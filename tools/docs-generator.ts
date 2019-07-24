const TypeDoc = require('typedoc');

const app = new TypeDoc.Application({
  module: 'none',
  experimentalDecorators: true,
  ignoreCompilerErrors: true,
  logger: 'none',
  theme: 'markdown',
  readme: 'none',
  excludePrivate: true,
  excludeProtected: true,
  excludeNotExported: true,
});

const project = app.convert(app.expandInputFiles(['src']));

if (project) app.generateDocs(project, 'docs');
