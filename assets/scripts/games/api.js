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

const userMove = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games' + store.games._id,
    method: 'PATCH',
    data: gameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  newGame,
  userMove
}
