'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onUserMove = function (event) {
  event.preventDefault()

  const index = $(event.target).data('cellIndex')
  // console.log(index)
  // // const player1 = 'x'
  // // const player2 = 'o'
  // const value = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
  //   while(!gameOver) {
  //     i++;
  //     if(i===9)
  //       {break;}
  //   }

  const value = 'x'
  $(event.target).html(`<h3>${value}</h3>`)

  const gameData = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: false
    }
  }

  api.newGame(gameData)
    .then(ui.onUpdateGameSucces)
    .catch(ui.onUpdateGamefailure)
}

module.exports = {
  onNewGame,
  onUserMove
}
