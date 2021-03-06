path   = require 'path'
fs     = require 'fs'
coffee = require 'coffee-script'
global.app = require "./config"

gruntConfig =
  pkg: "<json:package.json>"
  test:
    files: [ "tests/**/*.js" ]

  coffee:
    app:
      src: [ "#{app.paths.client}/js/*.coffee" ]
      dest:  "#{app.paths.public}/js"
      options:
        bare: true

    services:
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

  # dest: src
  copy:
    dist: 
      files: 
        "app/web/public/js/vendor/": "#{app.paths.client}/js/vendor/**"
        "app/web/public/css/":       "#{app.paths.client}/css/**"
        "app/web/public/img/":       "#{app.paths.client}/img/**"
        "app/web/public/":           "#{app.paths.client}/index.html"

  ##
  ## watch
  ##

  watch:
    coffee:
      files: [ "<config:coffee.app.src>",
               "<config:coffee.services.src>",
               "<config:coffee.vendor.src>",  
               "<config:coffee.myTasks.src>" ]
      tasks: "coffee reload"    

    client: 
      files: [
        "#{app.paths.client}/js/vendor/**",
        "#{app.paths.client}/css/**",
        "#{app.paths.client}/index.html"
      ]
      tasks: "copy reload"

    jaded:
      files: "#{app.paths.client}/templates/*.jade"
      tasks: "jaded reload"


  globals:
    exports: true


module.exports = (grunt) ->
  ## init config 
  grunt.initConfig gruntConfig
  
  grunt.loadNpmTasks "grunt-contrib"
  grunt.loadNpmTasks "grunt-reload"
  grunt.loadNpmTasks "grunt-exec"
  grunt.loadNpmTasks "grunt-coffee" 
  
  ## default 
  grunt.registerTask "default", 
    "coffee copy jaded lint reload test start watch"

  ## start
  grunt.registerTask "start", "start up servers", ->
    grunt.log.writeln "starting servers..."
    require "#{app.paths.server}/server"

  ## jaded
  grunt.registerTask "jaded", "compile jaded templates", ->
    jaded = require 'jaded'  
    {basename, extname}  = require 'path'
    src   = app.paths.client + '/templates'
    dest  = app.paths.public + '/templates'
    grunt.file.recurse src,
      (absolute, root, subdir, filename) ->
        name = basename filename, extname filename
        template = jaded.compile grunt.file.read(absolute), 
          development: true
          rivets: true
          amd: true
          filename: absolute
        grunt.file.write "#{dest}/#{name}.js", template

