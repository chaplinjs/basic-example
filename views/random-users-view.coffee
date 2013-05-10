template = require 'views/templates/home'
View = require 'views/base/view'

module.exports = class RandomUsersView extends View
  autoRender: true
  className: 'random-users cell'
  events:
    'click .shuffle': 'shuffle'
  template: template

  shuffle: (event) ->
    @model.shuffle()
