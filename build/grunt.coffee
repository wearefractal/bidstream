path   = require 'path'
fs     = require 'fs'
coffee = require 'coffee-script'
global.app = require "./config"

gruntConfig =
  pkg: "<json:package.json>"
  test:
    files: [ "tests/**/*.js" ]

  exec: 
    # http://github.com/wearefractal/jaded
    jaded: 
      # -r for rivets binding
      command: "#{app.paths.npmBin}/jaded -dra -i ./app/web/client/templates -o ./app/web/public/templates"
    static:
      command: "cp #{app.paths.client}/index.html #{app.paths.public} && cp #{app.paths.client}/js/vendor/*.js #{app.paths.public}/js/vendor && cp -R #{app.paths.client}/css/* #{app.paths.public}/css && cp -R #{app.paths.client}/img/* #{app.paths.public}/img"

  coffee:
    app:
      src: [ "#{app.paths.client}/js/*.coffee" ]
      dest:  "#{app.paths.public}/js"
      options:
        bare: true

    routes:
      src: [ "#{app.paths.client}/js/routes/*.coffee" ]
      dest:  "#{app.paths.public}/js/routes"
      options:
        bare: true

    vendor:
      src: [ "#{app.paths.client}/js/vendor/*.coffee" ]
      dest:  "#{app.paths.public}/js/vendor"
      options:
        bare: true

    myTasks:
      src: [ "./tasks/*.coffee" ]
      dest:  "./tasks"
      options:
        bare: true


  reload: {}

  lint:
    files: [ "grunt.js", "lib/**/*.js", "test/**/*.js" ]

  ##
  ## watch
  ##

  watch:
    index:
      files: "#{app.paths.client}/index.html"
      tasks: "exec:static reload"

    vendor:
      files: "#{app.paths.client}/js/vendor/*.js"
      tasks: "exec:static reload"

    # templates
    jaded:
      files: "#{app.paths.client}/templates/*.jade"
      tasks: "exec:jaded reload"

    coffee:
      files: [ "<config:coffee.app.src>",
               "<config:coffee.routes.src>",
               "<config:coffee.vendor.src>",  
               "<config:coffee.myTasks.src>" ]
      tasks: "coffee reload"    

    styles:
      files: "#{app.paths.public}/css/styles.css"
      tasks: "reload"

  globals:
    exports: true


module.exports = (grunt) ->
  ## init config 
  grunt.initConfig gruntConfig

  grunt.loadNpmTasks "grunt-coffee"
  grunt.loadNpmTasks "grunt-reload"
  grunt.loadNpmTasks "grunt-exec"

  ## default 
  grunt.registerTask "default", "exec:static exec:jaded lint test coffee reload start watch"

  ## start 
  grunt.registerTask "start", "start up servers", ->
    grunt.log.writeln "starting servers..."
    require "#{app.paths.server}/server"

 