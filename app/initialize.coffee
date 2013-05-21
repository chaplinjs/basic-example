Chaplin = require 'chaplin'
routes = require 'routes'

jQuery ->
  new Chaplin.Application().initialize(routes: routes, controllerSuffix: '-controller')
