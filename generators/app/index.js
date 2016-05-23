'use strict'
var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')
var _ = require('lodash')
var path = require('path')

module.exports = yeoman.Base.extend({
  initializing: function () {
    this.argument('name', { type: String, required: false })
    this.appName = this.name || path.basename(process.cwd()) || 'kyper-react-starter'
    this.appPath = this.env.options.appPath
    this.version = '0.0.1'
  },
  prompting: function () {
    var done = this.async()

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the \n' + chalk.red('Kyper React Generator')
    ))

    var prompts = [
      {
        type: 'input',
        name: 'githubUser',
        message: 'Github Username',
        default: 'kypertech'
      },
      {
        type: 'confirm',
        name: 'includeTravis',
        message: 'Would to include config for Travis CI?',
        default: true
      },
      // {
      //   type: 'confirm',
      //   name: 'includeHeroku',
      //   message: 'Would you like to config to deploy to Heroku?',
      //   default: true,
      //   when: function (answers) {
      //     return answers.includeTravis
      //   }
      // },
      {
        type: 'confirm',
        name: 'includeFireuser',
        message: 'Would you like to include Fireuser(User/Session management built on Firebase)?',
        default: true
      },
      {
        name: 'firebaseName',
        message: 'Firebase instance (https://' + chalk.red('<your instance>') + '.firebaseio.com)',
        required: true,
        when: function (answers) {
          return answers.includeFireuser
        },
        validate: function (input) {
          if (!input) return false
          if (input.match('http') || input.match('firebaseio.com')) return chalk.red('Just include the Firebase name, not the entire URL')
          if (!input.match(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/)) {
            return chalk.red('Your Firebase name may only contain [a-z], [0-9], and hyphen (-). ' +
              'It may not start or end with a hyphen.')
          }
          return true
        }
      }
    ]

    this.prompt(prompts, function (props) {
      this.answers = props
      this.githubUser = this.answers.githubUser
      this.firebaseName = this.answers.firebaseName
      // To access prompt answers later use this.answers.someOption
      done()
    }.bind(this))
  },
  writing: {
    app: function () {
      var appFilesArray = [
        { src: '_index.html', dest: 'index.html' },
        { src: 'app/**', dest: 'app' },
        { src: 'assets/**', dest: 'assets' },
        { src: 'bin/**', dest: 'bin' },
        { src: 'lib/**', dest: 'lib' }
      ]
      if (this.answers.includeFireuser) {
        appFilesArray.concat([
          { src: '_fireuser-index-server.js', dest: 'lib/index-server.js' }
        ])
      }
      this.copyFiles(appFilesArray)
      // Add matter specific files
    },
    projectfiles: function () {
      var projectFilesArray = [
        { src: '_package.json', dest: 'package.json' },
        { src: '_README.md', dest: 'README.md' },
        { src: 'Procfile', dest: 'Procfile' },
        { src: 'webpack-dev.config.js' },
        { src: 'webpack-production.config.js' },
        { src: 'webpack-server-production.config.js' },
        { src: 'gitignore', dest: '.gitignore' },
        { src: 'babelrc', dest: '.babelrc' }
      ]
      if (this.answers.includeTravis) {
        projectFilesArray.push({ src: '_travis.yml', dest: '.travis.yml' })
      }
      this.copyFiles(projectFilesArray)
    }
  },
  install: function () {
    this.npmInstall()
  },
  /**
   * @param {Array|Object} filesArray
   */
  copyFiles: function (filesArray) {
    console.log('files array:', filesArray)
    if (!filesArray) return
    filesArray.forEach(file => {
      var src = ''
      var destination = ''
      if (!_.has(file, 'src')) {
        if (_.isString(file)) {
          src = file
        } else {
          console.error('Invalid source for file copying.')
          throw new Error('Invalid source for file copy.')
        }
      }
      if (_.isObject(file)) {
        src = file.src
        destination = file.dest || file.src // Make destination source if not provided
      }
      if (src.charAt(0) === '_') { // template if filename starts with _
        // Copy with templating
        this.template(src, destination, this.templateContext)
      } else if (src.indexOf('*') !== -1 || src.indexOf('/**') !== -1) {
        // TODO: make this work better (work with nested folders and use src correctly)
        src.replace('**', '') // Remove /**
        src.replace('/', '') // Remove /
        this.directory(destination, destination)
      } else {
        // Normal copy
        this.fs.copy(
          this.templatePath(src),
          this.destinationPath(destination)
        )
      }
    })
  }
})
