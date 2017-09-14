const webpack = require('webpack');
const conf = require('./../gulp.conf');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


exports.plugins = {
  occurenceOder: new webpack.optimize.OccurrenceOrderPlugin(),
  noErrors: new webpack.NoErrorsPlugin(),
  extractText: new ExtractTextPlugin(conf.name+'.css'),
  provideJquery: new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery'
  }),
  uglifyJs: new webpack.optimize.UglifyJsPlugin({
        compress: {unused: true, dead_code: true} // eslint-disable-line camelcase
  }),
  html: function(title, path){
    var settings = {};
    if(title){
      settings.title = title;
    }
    if(path){
      settings.template = path;
    }
    settings.inject = true;

    return new HtmlWebpackPlugin(settings);
  },
  chunk: function(name){
    return new webpack.optimize.CommonsChunkPlugin({
        name: name,
        filename: name+'.js'
      });
  }
}

var createLoader = function(test, loaders, exclude){
  var loader = {}
  if(test){
    loader.test = test;
  }
  if(loaders){
    if(loaders instanceof Array){
      loader.loaders = loaders;
    }else{
      loader.loader = loaders;
    }
  }

  if(exclude){
    loader.exclude = exclude;
  }
  return loader;
};

var loaderSettings = {
  json: createLoader(/.json$/, ['json']),
  // css: createLoader(/\.css$/, ExtractTextPlugin.extract({
  //         fallbackLoader: "style-loader",
  //         loader: "css-loader"
  //       })),
  css: createLoader(/\.css$/, "style-loader!css-loader"),
  js: createLoader(/\.js$/, ['ng-annotate', 'babel'], /node_modules/),
  html: createLoader(/.html$/, ['html']),
  woff: createLoader(/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, ['url?limit=10000&mimetype=application/font-woff']),
  ttf: createLoader(/\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, ['file-loader']),
  esLint: createLoader(/\.js$/, ['eslint'], /node_modules/)
};
exports.loaders = loaderSettings;


exports.createOption = function(name,entries, loaders, plugins, externals){
  var module = {};
  if(name){
    module.name = name;
  }
  module.output = {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name].js'
  };
  if(entries){
    module.entry = entries;
  }
  module.module = {
  //     preLoaders : [loaderSettings.esLint]
  };
  if(loaders){
    module.module.loaders =  loaders;
  }

  if(plugins){
    module.plugins = plugins;
  }

  if(externals){
    module.externals = externals;
  }

  module.postcss = () => [autoprefixer];

  return module;
};
