module.exports = (match) ->
  match 'users/:user', 'users#show'
  match '', 'home#index'
