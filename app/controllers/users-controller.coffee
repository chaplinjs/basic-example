Chaplin = require 'chaplin'
Controller = require 'controllers/base/controller'
RandomUsersView = require 'views/random-users-view'
UserView = require 'views/user-view'

module.exports = class UsersController extends Controller
  index: (params) ->
    @collection = new Chaplin.Collection [
      {login: 'paulmillr'},
      {login: 'paul_irish'},
      {login: 'addyosmani'},
      {login: 'sindresorhus'},
      {login: 'molily'},
      {login: 'dhh'},
      {login: 'mehcode'}
    ]
    @view = new RandomUsersView {@collection, region: 'main'}

  show: (params) ->
    # Initialize new model with custom `url` attribute.
    @model = new Chaplin.Model {}, url: "https://api.github.com/users/#{params.login}"
    @view = new UserView {@model, region: 'main'}
    @model.fetch().then @view.render
