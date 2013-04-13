Controller = require 'controllers/base/controller'
UserView = require 'views/user-view'

module.exports = class HomeController extends Controller
  show: (params) ->
    @model = new Model url: "https://api.github.com/users/#{params}"
    @view = new UserView {@model, region: 'main'}
    @model.sync()

class RecentUsersCollection extends Collection
  model: User

  initialize: ->
    super
    @subscribeEvent 'users:show', @add

  getFollowers: ->
    @map((user) -> user.followers).reduce ((a, b) -> a + b), 0

class TopUsers
  defaults: ['paulmillr', 'paul_irish', 'molily', 'dhh', 'mehcode']
