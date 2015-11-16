'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk');
module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The reducers name'
    });
    this.capsName = this.name.toUpperCase();
    this.singularName = this.name.toLowerCase().charAt(this.name.length - 1) == 's' ? this.name.substring(0, this.name.length - 1): this.name;
    this.camelName = _.capitalize(this.name); //Capitalize first letter only
    // this.log('You called the WebpackReduxReact subgenerator with the argument ' + this.name + '.');
  },
  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'list',
      name: 'stateType',
      message: 'What type of state is this reducer reducing to?',
      choices: [
        {name: 'Array', value: 'array'},
        {name: 'Object', value: 'object'},
        {name: 'No Clue', value: 'array'},
      ]
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },
  writing: function () {
    this.log('state type: ', this.props.stateType);
    this.log('props: ', this.props);

    switch(this.props.stateType){
      case 'array':
        this.template('_array.js',  'app/reducers/' + this.name.toLowerCase() + '.js', this.templateContext);
        break;
      case 'object':
        this.template('_object.js',  'app/reducers/' + this.name.toLowerCase() + '.js', this.templateContext);
        break;
      default :
        this.template('_array.js',  'app/reducers/' + this.name.toLowerCase() + '.js', this.templateContext);
    }
  }
});
