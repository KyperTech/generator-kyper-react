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
    this.capsName = this.name.toUpperCase();
    this.camelName = _.capitalize(this.name); //Capitalize first letter only
    // this.log('You called the Container subgenerator with the argument ' + this.name + '.');
  },
  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'confirm',
      name: 'addAction',
      message: 'Do you want to create an action file for this component?\n' + chalk.red('WARNING:This will overwrite an existing action file of the same name.') + '\n',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },
  writing: function () {
    //TODO: Call action subgenerator instead
    if(this.props.addAction){
      this.template('_action.js', 'app/actions/' + this.name.toLowerCase() + '.js', this.templateContext);
    }
    this.template('_main.js', 'app/containers/'+ this.name + '/' + this.name + '.js', this.templateContext);
    this.template('_main.scss', 'app/containers/'+ this.name + '/' + this.name + '.scss',this.templateContext);
  }
});
