'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Hide authenticated options
  $('.unauthenticated').show()
  // Sign up listener
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  // Show unauthenticated options
  $('.authenticated').hide()
  $('#sign-out').on('submit', authEvents.onSignOut)
})
