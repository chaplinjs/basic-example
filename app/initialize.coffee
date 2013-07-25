routes = require 'routes'

# Execute handler on document ready event.
jQuery ->
  # Initialise new Chaplin application. Specify controller suffix for clarify.
  new Chaplin.Application {
    controllerSuffix: '-controller',
    root: 'basic-example/public/',
    pushState: false,
    routes
  }
