Controller = require 'controllers/base/controller'
UserView = require 'views/user-view'

module.exports = class UsersController extends Controller
  index: ->


  show: (params) ->
    @model = new Model url: "https://api.github.com/users/#{params}"
    @view = new UserView {@model, region: 'main'}
    @model.sync()
