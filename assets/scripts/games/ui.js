'use strict'

const store = require('./../store')

const newGameSuccess = function (response) {
  $('#message').text('Good luck!')

  $('#gameboard').show()

  // $('#message2').text('Player x please make youre move...')

  store.game = response.game
}

const newGameFailure = function (error) {
  $('#message').text('Game failed to start with error: ' + error.responseJSON.message)
}

const onUpdateGameSuccess = function (response) {
  $('#message').text('Player x please make your move...')
  store.game = response.game

  const moveHtml = `
    <h3>cell-value: ${response.game.cellIndex}</h3>
  `
  $('.row').html(moveHtml)
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
