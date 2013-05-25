Chaplin = require 'chaplin'

# Application-specific view helpers
# http://handlebarsjs.com/#helpers
# --------------------------------

# Get Chaplin-declared named routes. {{#url "like" "105"}}{{/url}}
Handlebars.registerHelper 'url', (routeName, params..., options) ->
  Chaplin.helpers.reverse routeName, params
