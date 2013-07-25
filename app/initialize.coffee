# All application routes that will be matched against URLs.
routes = (match) ->
  match '@:login', 'users#show'
  match '', 'users#index'

# Helper for Handlebars templates.
# http://handlebarsjs.com/#helpers
# Get Chaplin-declared named routes. {{url "likes#show" "105"}}
Handlebars.registerHelper 'url', (routeName, params..., options) ->
  Chaplin.helpers.reverse routeName, params

# Execute handler on document ready event.
jQuery ->
  # Initialise new Chaplin application. Specify controller suffix for clarity.
  new Chaplin.Application
    controllerSuffix: '-controller', pushState: false, routes: routes
