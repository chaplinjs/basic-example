template = require 'views/templates/user'
View = require 'views/base/view'

module.exports = class RandomUsersView extends View
  className: 'random-users cell'
  events:
    'click .shuffle': 'shuffle'
  listen:
    'sync model': 'render'
  template: template

  shuffle: (event) ->
    @model.shuffle()
