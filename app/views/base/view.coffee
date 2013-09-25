# Helper for Handlebars templates.
# http://handlebarsjs.com/#helpers
# Get Chaplin-declared named routes. {{url "likes#show" "105"}}
Handlebars.registerHelper 'url', (routeName, params..., options) ->
  Chaplin.helpers.reverse routeName, params

# Base view.
module.exports = class View extends Chaplin.View
  # Precompiled templates function initializer.
  getTemplateFunction: ->
    @template
