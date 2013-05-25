Chaplin = require 'chaplin'
Controller = require 'controllers/base/controller'
RandomUsersView = require 'views/random-users-view'
UserView = require 'views/user-view'
SiteView = require 'views/site-view'

module.exports = class UsersController extends Chaplin.Controller
  # Would be executed before each action.
  # We need to persist
  beforeAction: ->
    # Site view declares “main” region.
    @compose 'site', SiteView

  # Index action. Will just display a list of users.
  index: (params) ->
    # Create simple collection with random GitHub users.
    @collection = new Chaplin.Collection [
      {login: 'paulmillr'},
      {login: 'paulirish'},
      {login: 'addyosmani'},
      {login: 'sindresorhus'},
      {login: 'molily'},
      {login: 'dhh'},
      {login: 'mehcode'}
    ]

    # Render the collection to.
    @view = new RandomUsersView {@collection, autoRender: true, region: 'main'}

  show: (params) ->
    # Initialize new model with custom `url` attribute.
    @model = new Chaplin.Model {}, url: "https://api.github.com/users/#{params.login}"
    @view = new UserView {@model, region: 'main'}
    @model.fetch().then @view.render
