/* eslint-disable no-console, no-use-before-define */

var Express = require('express');
var fs = require('fs');
var path = require('path');

var config = require('../webpack-production.config');

var renderIndex = require('../lib/render-index');
var renderApp = require('../build/bundle-server');

var serveStatic = require('serve-static');

var app = new Express();

app.use('/' + config.publicPath, serveStatic(config.output.path, {
  index: false,
  setHeaders: function(res) {
    res.setHeader('Cache-Control', 'max-age=2592000');
  }
}));

// This is fired every time the server side receives a request
app.use(handleRender);

var stats = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'stats.json')));

function handleRender(req, res) {
  renderApp(function (result) {
    res.send(renderIndex({
      hash: stats.hash,
      appData: result.appData,
      appMarkup: result.appMarkup
    }));
  });
}

app.listen(config.port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${config.port}. Open up http://localhost:${config.port}/ in your browser.`);
  }
});
