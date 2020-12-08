'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const onSignUp = function (event) {
  // Prevent the page from refreshing
  event.preventDefault()
  // get data from form
  // Pass the form DOM object to `getFormFields`:
  // Use event.target as the form
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // Prevent the page from refreshing
  event.preventDefault()
  // Get data from form
  // Pass the form DOM object to `getFormFields`
  // use event.target as the form
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {

  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
