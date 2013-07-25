# User model. Main application model. Stores user data.
# Inherits from Chaplin model which inherits from Backbone model.
module.exports = class User extends Chaplin.Model
  # Corresponds to stuff like https://api.github.com/users/paulmillr.
  # Used when model fetch and save are done.
  url: ->
    login = @get 'login'
    "https://api.github.com/users/#{login}"
