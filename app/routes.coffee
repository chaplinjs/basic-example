# List of routes
module.exports = (match) ->
  match '@:login', 'users#show'
  match '', 'users#index'
