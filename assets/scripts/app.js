'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')
// const player1 = 'x'
// const player2 = 'o'

$(() => {
  // your JS code goes here
  // Hide authenticated options

  $('.authenticated').hide()
  // Sign up listener
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#new-game').on('submit', gameEvents.onNewGame)

  $('.row').on('click', gameEvents.onUserMove)
  $('#games-index').on('click', gameEvents.onGetGames)
})
