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

  let cellValue = ['x', 'o']
  for (let i = 0; i < cellValue.length; i++) {
    if ($(event.target).html() === '') {
      $(event.target).html(cellValue[0])
    } else if ($(event.target).html() !== '') {
      $(event.target).html(cellValue[1])
    }
  }

  const value = $(event.target).data([cellValue])

  api.onUserMove(index, value)
    .then(ui.onUpdateGameSucces)
    .catch(ui.onUpdateGamefailure)

  // let tileMark = 'x'
  // const value2 = 'o'
  //
  // if ($(event.target).html() === '') {
  //   $(event.target).html(value = 'x')


  // else if ($(event.target).html(cellValue1)) {
  //   $(event.target).html(cellValue2)
  // } else {
  //   $(event.target).html(cellValue2)
  // }
  // else if ($(event.target).html() === 'cellValue1') {
  //   $(event.target).html(cellValue2)
  // }

  // else {
  //   $(event.target).html('o')
  // }
  // `<h3>${tileMark}</h3>`

  // api.newGame(index, value)
  //   .then(ui.onUpdateGameSucces)
  //   .catch(ui.onUpdateGamefailure)
  //
  //   if (value === 'x') {
  //     value = 'o'
  //   }
  // } else {
  //   value = 'x'
  // }
  {$('#message').text('Spot taken, please choose a valid spot!')}
  console.log('TAKEN!')

  // $(event.target).html(`<h3>${value}</h3>`)

  // const gameData = {
  // //   game: {
  // //     cell: {
  // //       index: index,
  // //       value: tileMark
  // //     },
  // //     over: false
  // //   }
  // // }

  // api.newGame(tileMark, index)
  //   .then(ui.onUpdateGameSucces)
  //   .catch(ui.onUpdateGamefailure)
  // api.newGame(index, value)
  // api.onUserMove(index, value)
  //   .then(ui.onUpdateGameSucces)
  //   .catch(ui.onUpdateGamefailure)
}

module.exports = {
  onNewGame,
  onUserMove
}
