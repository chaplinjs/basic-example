View = require 'views/base/view'

# Site view is a top-level view which is bound to body.
module.exports = class SiteView extends View
  id: 'site-container'
  el: 'body'
  regions:
    main: '#main-container'
    navigation: '#nav-container'
  template: require 'views/templates/site'
