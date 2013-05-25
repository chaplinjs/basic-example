template = require 'views/templates/random-users'
View = require 'views/base/view'

module.exports = class RandomUsersView extends View
  className: 'random-users cell'
  template: template
