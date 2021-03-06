const Sequelize = require('sequelize');
const db = require('../db');

const Room_music = db.define('room_music', {
  roomId: {
    type: Sequelize.INTEGER
  },
  musicId: {
    type: Sequelize.INTEGER
  },
  voteCount: {
    type: Sequelize.INTEGER
  }
});

module.exports = Room_music;
