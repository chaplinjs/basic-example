Chaplin = require 'chaplin'
RandomUsersView = require 'views/random-users-view'
RecentUsersView = require 'views/recent-users-view'
SiteView = require 'views/site-view'

module.exports = class Controller extends Chaplin.Controller
  beforeAction:
    '.*': ->
      @compose 'site', SiteView
      @compose 'navigation', RandomUsersView
      @compose 'footer', RecentUsersView
