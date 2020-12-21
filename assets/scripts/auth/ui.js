'use strict'

const store = require('./../store')

// The ajax function's .then
// will pass this funciton a response object from the API
const signUpSuccess = function (response) {
  $('#message2').hide()
  $('#success').show()
  $('#success').text('Signed up successfully!')

  $('form').trigger('reset')
}

// The ajax function's .catch
// will pass this funciton an error object
const signUpFailure = function (error) {
  $('#success').text('Sign up failed with error: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message2').hide()
  $('#success').hide()
  $('#message').show()
  $('#message').text('Signed in successfully!')

  // "store" the User
  // Create a new key on the 'store' object
  // Give that key a value of 'response.user'
  store.user = response.user

  // TODO: "Change the View"
  // Hide the unauth options

  // Show the auth options
  $('.delicate').show()
  $('.authenticated').show()
  $('#gameboard').hide()
  $('.unauthenticated').hide()
  $('#games-flash').hide()
  $('#turn-alert').hide()
  $('#special-alert').hide()
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
}

const signOutSuccess = function () {
  // console.log('did this run?')

  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('#message2').show()
  $('#message').hide()
  $('#games-flash').hide()
  $('#message2').text('Signed out successfully!')

  store.user = null

  // Reset form:
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message2').text('Sign out fail: ' + error.responseJSON.message)
}

const changePasswordSuccess = function () {
  $('#games-flash').show()
  $('#games-flash').text('Password changed successfully!')
  $('#message').hide()

  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#games-flash').text('Password change failed with error: ' + error.responseJSON.message)
  $('#message').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
