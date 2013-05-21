Chaplin = require 'chaplin'
RandomUsersView = require 'views/random-users-view'
SiteView = require 'views/site-view'

module.exports = class Controller extends Chaplin.Controller
  beforeAction: (params, route) ->
    console.log 'Controller#beforeAction', route
    @compose 'site', SiteView
