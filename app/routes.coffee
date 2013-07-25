# All application routes that will be matched against URLs.
module.exports = (match) ->
  match '@:login', 'users#show'
  match '', 'users#index'
