var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var app_dir = path.join(__dirname, 'app');

var licenseBanner = 'LICENSES: \n' +
  'I hereby list the LICENSES of the javascript vendor resources I used. ' +
  'A big THANK YOU is in order here!\n' +
  'All components are used without any modification and were just bundled using standard webpack.\n\n' +
  '--Famo.us: MPLV2.0, see here: https://github.com/Famous/famous/blob/develop/LICENSE\n' +
  '--Webpack: MIT License, see here: https://github.com/webpack/webpack/blob/master/LICENSE\n' +
  '--Bootstrap: MIT License, see here: https://github.com/twbs/bootstrap/blob/master/LICENSE\n' +
  '--MomentJS: Special (open) License, see here: https://github.com/moment/moment/blob/develop/LICENSE\n' +
  '--Font Awesome by Dave Gandy - http://fontawesome.io: MIT License, see here: http://fontawesome.io/license\n' +
  '--jQuery/jQuery UI: MIT License, see here: https://jquery.org/license/\n' +
  '--react: BSD License, see here: https://github.com/facebook/react/blob/master/LICENSE\n' +
  '--react-intl: Copyright 2014 Yahoo Inc. All rights reserved., see here: https://github.com/yahoo/react-intl/blob/master/LICENSE.md\n' +
  '--underscore: MIT license, see here: https://github.com/jashkenas/underscore/blob/master/LICENSE\n' +
  '--griddle-react: MIT License, see here: https://github.com/DynamicTyped/Griddle/blob/master/LICENSE\n' +
  '--D3:\n' +
  'Copyright (c) 2010-2015, Michael Bostock \n' +
  'All rights reserved.\n\n' +
  'Redistribution and use in source and binary forms, with or without ' +
  'modification, are permitted provided that the following conditions are met:\n\n' +
  '* Redistributions of source code must retain the above copyright notice, this ' +
  'list of conditions and the following disclaimer.\n\n' +
  '* Redistributions in binary form must reproduce the above copyright notice, ' +
  'this list of conditions and the following disclaimer in the documentation ' +
  'and/or other materials provided with the distribution.\n\n' +
  '* The name Michael Bostock may not be used to endorse or promote products ' +
  'derived from this software without specific prior written permission.\n\n' +
  'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \'AS IS\' ' +
  'AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE ' +
  'IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE ' +
  'DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT, ' +
  'INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, ' +
  'BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, ' +
  'DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY ' +
  'OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING ' +
  'NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, ' +
  'EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.' +
  '\n\nEND OF LICENSES DECLARATION'

var config = {
  context: __dirname,
  entry: {
    app: ['./app/main.js']
  },
  output: {
    publicPath: '/dogs/',
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {}
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js$/,
        include: [app_dir],
        loaders: ['babel']
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(woff|png)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      // {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=image/svg+xml'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/font-woff2'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&minetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.json$/, loader: "json"}
    ],
    preLoaders: [
      {
        test: /\.js$/,
        include: [app_dir],
        loader: 'eslint'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('app', null, false),
    new webpack.BannerPlugin(licenseBanner),
    new webpack.DefinePlugin({
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    })
  ]
};

module.exports = config;