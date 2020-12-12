'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

let currentPlayer = 'x'
let turnCount = 0
let gameOver = false

const onNewGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
const playerTurn = function () {
  currentPlayer = 'x'
  turnCount++
  if (turnCount % 2 === 0) {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}
const onUserMove = function (event) {
  event.preventDefault()
  const index = event.target.id

  playerTurn()

  if ($(event.target).text().length === 0) {
    $(event.target).text(currentPlayer)
    const value = $(event.target).text()
    const playerMove = 'move is valid'
    console.log(playerMove)
    api.userMove(index, value)
      .then(ui.onUpdateGameSucces)
      .catch(ui.onUpdateGamefailure)
  } else {
    const playerMove = 'move is invalid'
    console.log(playerMove)
    $('#message').text('invalid move')
  }
}

module.exports = {
  onNewGame,
  onUserMove
}
