'use strict'

const store = require('./../store')

const newGameSuccess = function (data) {
  $('#game-message').text('Good luck!')
  $('#message').hide()

  $('#gameboard').show()
  $('#games-flash').hide()

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

const getGamesSuccess = function (response) {
  const games = response.games
  $('#games-flash').show()
  const gamesHTML = (`
    <div class="total-games">
      <h4>User "${store.user.email}" has played: ${games.length} games!</h4>
    </div>`)
  $('#games-flash').html(gamesHTML)
}

const getGamesFailure = function (error) {
  $('#games-flash').text('Failed to get games with error: ' + error.responseJSON.message)
  $('#games-flash').removeClass()
  $('#games-flash').addClass('failure')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
