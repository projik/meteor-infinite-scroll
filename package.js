Package.describe({
  name: 'projik:infinite-scroll',
  version: '0.9.1',
  // Brief, one-line summary of the package.
  summary: 'Template level infinite scrolling.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/projik/meteor-infinite-scroll',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use(['jquery', 'less', 'reactive-var', 'templating', 'jwo1f:parent-template@0.0.3', 'dburles:mongo-collection-instances@0.1.3'], 'client');
  api.use(['check', 'ecmascript'], ['client', 'server']);
  api.export('InfiniteScroll');
  api.addFiles('infiniteScroll.html', 'client');
  api.addFiles('infinite-scroll.js', 'client');
  api.addFiles('infinite-scroll.less', 'client');
});
