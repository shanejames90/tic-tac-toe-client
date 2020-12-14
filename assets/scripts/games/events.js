'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

// Define current game board:

const onNewGame = function (event) {
  event.preventDefault()

  // const form = event.target
  // const data = getFormFields(form)
  // console.log(data)
  gameCell = ['', '', '', '', '', '', '', '', '']
  gameOver = false
  turnCount = 0
  $('#turn-alert').text('YOUR TURN: PLAYER X')

  $('#gameboard').css('pointer-events', 'auto')

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

let currentPlayer = 'x'
let gameCell = ['', '', '', '', '', '', '', '', '']
let turnCount = 0
let gameOver = false

let playerTurn = function () {
  currentPlayer = 'x'
  turnCount++
  if (turnCount % 2 === 0) {
    currentPlayer = 'o'
    $('#turn-alert').text('YOUR TURN: PLAYER X')
  } else {
    currentPlayer = 'x'
    $('#turn-alert').text('YOUR TURN: PLAYER O')
  }
}

const onUserMove = function (event) {
  // const index = event.target.id
  // console.log(index)
  event.preventDefault()

  $('#special-alert').hide()
  // console.log(playerTurn)
  // const form = event.target
  // const data = getFormFields(form)
  const index = event.target.id
  console.log(index)

  playerTurn()

  if ($(event.target).text().length === 0) {
    $(event.target).text(currentPlayer)
    const value = $(event.target).text()
    const playerMove = 'move is valid'
    console.log(playerMove)
    gameCell[index] = currentPlayer

    $('#special-alert').show()

    const checkWin = function () {
      if (gameCell[index] === gameCell[0] &&
      gameCell[index] === gameCell[1] &&
      gameCell[index] === gameCell[2]) {
        $('#special-alert').text(`You are the winner ${currentPlayer}`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
      } else if (
        gameCell[index] === gameCell[3] &&
      gameCell[index] === gameCell[4] &&
      gameCell[index] === gameCell[5]
      ) {
        $('#special-alert').text(`You are the winner ${currentPlayer}`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
      } else if (
        gameCell[index] === gameCell[6] &&
      gameCell[index] === gameCell[7] &&
      gameCell[index] === gameCell[8]
      ) {
        $('#special-alert').text(`You are the winner ${currentPlayer}`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
      } else if (
        gameCell[index] === gameCell[0] &&
      gameCell[index] === gameCell[3] &&
      gameCell[index] === gameCell[6]
      ) {
        $('#special-alert').text(`You are the winner ${currentPlayer}`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
      } else if (
        gameCell[index] === gameCell[1] &&
      gameCell[index] === gameCell[4] &&
      gameCell[index] === gameCell[7]
      ) {
        $('#special-alert').text(`You are the winner ${currentPlayer}`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
      } else if (
        gameCell[index] === gameCell[2] &&
      gameCell[index] === gameCell[5] &&
      gameCell[index] === gameCell[8]
      ) {
        $('#special-alert').text(`You are the winner ${currentPlayer}`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
      } else if (
        gameCell[index] === gameCell[0] &&
      gameCell[index] === gameCell[4] &&
      gameCell[index] === gameCell[8]
      ) {
        $('#special-alert').text(`You are the winner ${currentPlayer}`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
      } else if (
        gameCell[index] === gameCell[2] &&
      gameCell[index] === gameCell[4] &&
      gameCell[index] === gameCell[6]
      ) {
        $('#special-alert').text(`You are the winner ${currentPlayer}`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
      }
      let gameDraw = !gameCell.includes('')
      if (gameDraw) {
        $('#special-alert').text('Game has ended in a tie! CAT wins!')
        $('.row').on('click', function () {
          $('#special-alert').text('Please start a new game!')
          $('#gameboard').css('pointer-events', 'none')
        })
        gameOver = true
      }
    }
    checkWin(gameCell)

    api.userMove(index, currentPlayer, gameOver)
      .then(ui.onUpdateGameSucces)
      .catch(ui.onUpdateGamefailure)
    // console.log(value)
  } else {
    $(event.target).off()
    $(playerTurn).off()
    // Disable turncount
    const playerMove = 'move is invalid'
    console.log(playerMove)
    $('#special-alert').show()
    $('#special-alert').text('invalid move')
  }
}

const onGetGames = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

module.exports = {
  onNewGame,
  onUserMove,
  onGetGames
}
