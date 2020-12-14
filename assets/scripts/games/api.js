'use strict'

const store = require('./../store')
const config = require('./../config')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const userMove = function (index, value, gameOver) {
  // console.log(data)
  // console.log(index)
  // console.log(value)
  // const gameOver = store.game.over
  // console.log(over)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  newGame,
  userMove
}
