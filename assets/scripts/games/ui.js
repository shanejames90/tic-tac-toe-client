'use strict'

const store = require('./../store')

const newGameSuccess = function (response) {
  $('#message').text('Good luck!')

  $('#gameboard').show()

  $('#message2').text('Player x please make youre move...')

  store.game = response.game
}

const newGameFailure = function (error) {
  $('#message').text('Game failed to start with error: ' + error.responseJSON.message)
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
