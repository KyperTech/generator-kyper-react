'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
    this.camelName = _.capitalize(this.name);
  },

  writing: function () {
    this.template('_main.js', 'app/actions/' + this.name.toLowerCase() + '.js', this.templateContext);
  }
});
