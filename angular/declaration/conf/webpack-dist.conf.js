const nodeExternals = require('webpack-node-externals');
const conf = require('./gulp.conf');
const helper = require('./helpers/webpackHelper.js');

// var vendors = helper.createOption(conf.name+'-vendor',conf.dependencies,[helper.loaders.js, helper.loaders.json, helper.loaders.css, helper.loaders.html],
//  [helper.plugins.provideJquery, helper.plugins.chunk(conf.name+'-vendors')] );

var entry={};
entry[conf.name]=`./${conf.path.src('index')}`;
var api = helper.createOption(conf.name,entry,
    [helper.loaders.js, helper.loaders.json, helper.loaders.css, helper.loaders.html, helper.loaders.woff, helper.loaders.ttf],
    [helper.plugins.provideJquery, helper.plugins.occurenceOder, helper.plugins.noErrors, helper.plugins.extractText, helper.plugins.uglifyJs],
    [nodeExternals()] );


var standaloneEntry = {};
var vendorsName = conf.name+'-vendor'+conf.version;
standaloneEntry[conf.name+'-standalone'+conf.version] = `./${conf.path.src('/libs/libs')}`;
standaloneEntry[vendorsName] = conf.dependencies;

var standalone = helper.createOption(undefined,standaloneEntry,
    [helper.loaders.js, helper.loaders.json, helper.loaders.css, helper.loaders.html, helper.loaders.woff, helper.loaders.ttf],
    [ helper.plugins.provideJquery, helper.plugins.occurenceOder, helper.plugins.noErrors, helper.plugins.extractText, helper.plugins.chunk(vendorsName),helper.plugins.html(undefined,conf.path.src('index.html'))]
  );

module.exports = [
  // vendors,
  api,
  standalone
]
