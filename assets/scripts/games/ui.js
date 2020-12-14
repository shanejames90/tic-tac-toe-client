'use strict'

const store = require('./../store')

const newGameSuccess = function (data) {
  $('#game-message').text('Good luck!')
  $('#game-message').fadeOut(4000)

  $('#gameboard').show()

  // $('#message2').text('Player x please make youre move...')

// This generates a new game id when New Game button is hit.
  store.game = data.game
  $('.box').empty()
  // console.log(data)
}

const newGameFailure = function (error) {
  $('#message').text('Game failed to start with error: ' + error.responseJSON.message)
}

const onUpdateGameSuccess = function (data) {
  $('#message').hide()
  // $('#message2').text('Player x please make your move...')
  store.game = data.game
  const gameOver = data.game.over
  // console.log(gameOver)
}

const onUpdateGameFailure = function (error) {
  $('#message').text('Game failed to update with error: ' + error.responseJSON.message)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
