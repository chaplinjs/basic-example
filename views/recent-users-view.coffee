CollectionView = require 'views/base/collection-view'
RecentUserView = require 'views/recent-user-view'
template = require 'views/templates/home'

module.exports = class RecentUsersView extends CollectionView
  className: 'recent-users'
  itemView: RecentUserView
  listSelector: '.users-list'
  template: template
