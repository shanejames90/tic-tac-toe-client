'use strict'

const store = require('./../store')

// The ajax function's .then
// will pass this funciton a response object from the API
const signUpSuccess = function (response) {
  $('#message').text('Signed up successfully!')
}

// The ajax function's .catch
// will pass this funciton an error object
const signUpFailure = function (error) {
  $('#message').text('Sign up failed with error: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully!')

  // "store" the User
  // Create a new key on the 'store' object
  // Give that key a value of 'response.user'
  store.user = response.user

  // TODO: "Change the View"
  // Hide the unauth options
  $('.unauthenticated').hide()
  // Show the auth options
  $('.authenticated').show()
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully!')

  $('authenticated').hide()
  $('unauthenticated').show()

  store.user = null

  // Reset form:
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('Sign out fail: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
