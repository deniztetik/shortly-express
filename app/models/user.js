var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link');

// this is a thing
var User = db.Model.extend({
  tableName: 'users',
  hasTimeStamps: true,

  hashPassword: function() {

  },
  userLinks: function() {
    return this.hasMany(Link);
  }
});

module.exports = User;
