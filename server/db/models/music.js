const Sequelize = require('sequelize');
const db = require('../db');

const Music = db.define('music', {
  songId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  audio: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: true
  },
  album: {
    type: Sequelize.STRING,
    allowNull: true
  },
  playtime: {
    type: Sequelize.STRING,
    allowNull: true
  },
  artworkUrl: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Playlist;
