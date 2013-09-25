View = require 'views/base-view'

# Site view is a top-level view which is bound to body.
module.exports = class SiteView extends View
  container: 'body'
  id: 'site-container'
  regions:
    url: '#page-url'
    main: '#main-container'
    navigation: '#nav-container'
  template: require './templates/site'
