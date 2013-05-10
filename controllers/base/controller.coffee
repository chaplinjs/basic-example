Chaplin = require 'chaplin'
RandomUsersView = require 'views/random-users-view'
SiteView = require 'views/site-view'

module.exports = class Controller extends Chaplin.Controller
  beforeAction: ->
    @compose 'site', SiteView
    @compose 'navigation', ->
      @collection = new Chaplin.Collection [
        {login: 'paulmillr'},
        {login: 'paul_irish'},
        {login: 'addyosmani'},
        {login: 'sindresorhus'},
        {login: 'molily'},
        {login: 'dhh'},
        {login: 'mehcode'}
      ]
      @view = new RandomUsersView {@collection}

