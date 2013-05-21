module.exports = (match) ->
  match '@:login', 'users#show'
  match '', 'users#index'
