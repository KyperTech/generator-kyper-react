'use strict'
var yeoman = require('yeoman-generator')

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    })
  },

  prompting: function () {
    var done = this.async()

    var prompts = [{
      type: 'confirm',
      name: 'addStyle',
      message: 'Do you want to include an SCSS file for styles?',
      default: true
    }]

    this.prompt(prompts, function (props) {
      this.props = props
      // To access props later use this.props.someOption
      done()
    }.bind(this))
  },

  writing: function () {
    if (this.props.addStyle) {
      this.template('_style.js', 'app/components/' + this.name + '/' + this.name + '.js', this.templateContext)
      return this.template('_main.scss', 'app/components/' + this.name + '/' + this.name + '.scss', this.templateContext)
    }
    this.template('_noStyle.js', 'app/components/' + this.name + '/' + this.name + '.js', this.templateContext)
  }
})
