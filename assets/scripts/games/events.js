'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

// Define current game board:

const onNewGame = function (event) {
  event.preventDefault()
  // un-blur on start of new game
  $('.zero').css({ filter: 'blur(0px)' })
  $('.one').css({ filter: 'blur(0px)' })
  $('.two').css({ filter: 'blur(0px)' })
  $('.three').css({ filter: 'blur(0px)' })
  $('.four').css({ filter: 'blur(0px)' })
  $('.five').css({ filter: 'blur(0px)' })
  $('.six').css({ filter: 'blur(0px)' })
  $('.seven').css({ filter: 'blur(0px)' })
  $('.eight').css({ filter: 'blur(0px)' })
  $('#special-alert').hide()
  $('#turn-alert').show()
  $('#message').hide()
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

let currentPlayer = 'X'
let gameCell = ['', '', '', '', '', '', '', '', '']
let turnCount = 0
let gameOver = false

let playerTurn = function () {
  currentPlayer = 'X'
  turnCount++
  if (turnCount % 2 === 0) {
    currentPlayer = 'O'
    $('#turn-alert').text('YOUR TURN: PLAYER X')
  } else {
    currentPlayer = 'X'
    $('#turn-alert').text('YOUR TURN: PLAYER O')
  }
}

const onUserMove = function (event) {
  // const index = event.target.id
  // console.log(index)
  event.preventDefault()
  $('#game-message').hide()
  $('#games-flash').hide()

  $('#special-alert').hide()
  // console.log(playerTurn)
  // const form = event.target
  // const data = getFormFields(form)
  const index = event.target.id

  playerTurn()

  if ($(event.target).text().length === 0) {
    $(event.target).text(currentPlayer)
    const value = $(event.target).text()
    const playerMove = 'move is valid'
    // console.log(playerMove)
    gameCell[index] = currentPlayer

    $('#special-alert').hide()

    const checkWin = function () {
      if (gameCell[index] === gameCell[0] &&
      gameCell[index] === gameCell[1] &&
      gameCell[index] === gameCell[2]) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text(`${currentPlayer} HAS WON THE GAME!`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
        $('.three').css({ filter: 'blur(10px)' })
        $('.four').css({ filter: 'blur(10px)' })
        $('.five').css({ filter: 'blur(10px)' })
        $('.six').css({ filter: 'blur(10px)' })
        $('.seven').css({ filter: 'blur(10px)' })
        $('.eight').css({ filter: 'blur(10px)' })
      } else if (
        gameCell[index] === gameCell[3] &&
      gameCell[index] === gameCell[4] &&
      gameCell[index] === gameCell[5]
      ) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text(`${currentPlayer} HAS WON THE GAME!`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
        $('.zero').css({ filter: 'blur(10px)' })
        $('.one').css({ filter: 'blur(10px)' })
        $('.two').css({ filter: 'blur(10px)' })
        $('.six').css({ filter: 'blur(10px)' })
        $('.seven').css({ filter: 'blur(10px)' })
        $('.eight').css({ filter: 'blur(10px)' })
      } else if (
        gameCell[index] === gameCell[6] &&
      gameCell[index] === gameCell[7] &&
      gameCell[index] === gameCell[8]
      ) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text(`${currentPlayer} HAS WON THE GAME!`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
        $('.zero').css({ filter: 'blur(10px)' })
        $('.one').css({ filter: 'blur(10px)' })
        $('.two').css({ filter: 'blur(10px)' })
        $('.three').css({ filter: 'blur(10px)' })
        $('.four').css({ filter: 'blur(10px)' })
        $('.five').css({ filter: 'blur(10px)' })
      } else if (
        gameCell[index] === gameCell[0] &&
      gameCell[index] === gameCell[3] &&
      gameCell[index] === gameCell[6]
      ) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text(`${currentPlayer} HAS WON THE GAME!`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
        $('.one').css({ filter: 'blur(10px)' })
        $('.two').css({ filter: 'blur(10px)' })
        $('.four').css({ filter: 'blur(10px)' })
        $('.five').css({ filter: 'blur(10px)' })
        $('.seven').css({ filter: 'blur(10px)' })
        $('.eight').css({ filter: 'blur(10px)' })
      } else if (
        gameCell[index] === gameCell[1] &&
      gameCell[index] === gameCell[4] &&
      gameCell[index] === gameCell[7]
      ) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text(`${currentPlayer} HAS WON THE GAME!`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
        $('.zero').css({ filter: 'blur(10px)' })
        $('.three').css({ filter: 'blur(10px)' })
        $('.six').css({ filter: 'blur(10px)' })
        $('.two').css({ filter: 'blur(10px)' })
        $('.five').css({ filter: 'blur(10px)' })
        $('.eight').css({ filter: 'blur(10px)' })
      } else if (
        gameCell[index] === gameCell[2] &&
      gameCell[index] === gameCell[5] &&
      gameCell[index] === gameCell[8]
      ) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text(`${currentPlayer} HAS WON THE GAME!`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
        $('.zero').css({ filter: 'blur(10px)' })
        $('.one').css({ filter: 'blur(10px)' })
        $('.three').css({ filter: 'blur(10px)' })
        $('.four').css({ filter: 'blur(10px)' })
        $('.six').css({ filter: 'blur(10px)' })
        $('.seven').css({ filter: 'blur(10px)' })
      } else if (
        gameCell[index] === gameCell[0] &&
      gameCell[index] === gameCell[4] &&
      gameCell[index] === gameCell[8]
      ) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text(`${currentPlayer} HAS WON THE GAME!`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
        $('.one').css({ filter: 'blur(10px)' })
        $('.two').css({ filter: 'blur(10px)' })
        $('.five').css({ filter: 'blur(10px)' })
        $('.three').css({ filter: 'blur(10px)' })
        $('.six').css({ filter: 'blur(10px)' })
        $('.seven').css({ filter: 'blur(10px)' })
      } else if (
        gameCell[index] === gameCell[2] &&
      gameCell[index] === gameCell[4] &&
      gameCell[index] === gameCell[6]
      ) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text(`${currentPlayer} HAS WON THE GAME!`)
        gameOver = true
        $('#gameboard').css('pointer-events', 'none')
        $('.zero').css({ filter: 'blur(10px)' })
        $('.one').css({ filter: 'blur(10px)' })
        $('.three').css({ filter: 'blur(10px)' })
        $('.five').css({ filter: 'blur(10px)' })
        $('.seven').css({ filter: 'blur(10px)' })
        $('.eight').css({ filter: 'blur(10px)' })
      } else if (!gameCell.includes('')) {
        $('#turn-alert').hide()
        $('#special-alert').show()
        $('#special-alert').text('Game has ended in a tie! CAT wins!')
        // blur gameboard
        $('#gameboard').css('pointer-events', 'none')
        $('.zero').css({ filter: 'blur(10px)' })
        $('.one').css({ filter: 'blur(10px)' })
        $('.two').css({ filter: 'blur(10px)' })
        $('.three').css({ filter: 'blur(10px)' })
        $('.four').css({ filter: 'blur(10px)' })
        $('.five').css({ filter: 'blur(10px)' })
        $('.six').css({ filter: 'blur(10px)' })
        $('.seven').css({ filter: 'blur(10px)' })
        $('.eight').css({ filter: 'blur(10px)' })
        // $('.row').on('click', function () {
        //   $('#special-alert').text('Please start a new game!')
        //   $('#gameboard').css('pointer-events', 'none')
        // })
        gameOver = true
      }
    }
    checkWin(gameCell)

    api.userMove(index, currentPlayer, gameOver)
      .then(ui.onUpdateGameSucces)
      .catch(ui.onUpdateGamefailure)
    // console.log(value)
  } else {
    // $(event.target).off()
    $(playerTurn).off()
    // Disable turncount
    const playerMove = 'move is invalid'
    $('#special-alert').show()
    $('#special-alert').text('invalid move')
    $('#turn-alert').show()
  }
}

const onGetGames = function (event) {
  event.preventDefault()
  $('#message').hide()

  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

module.exports = {
  onNewGame,
  onUserMove,
  onGetGames
}
