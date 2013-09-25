routes = require './routes'

# Execute handler on document ready event.
jQuery ->
  # Initialise new Chaplin application.
  # Specify controller suffix for clarity.
  new Chaplin.Application
    controllerSuffix: '-controller', pushState: false, routes: routes
