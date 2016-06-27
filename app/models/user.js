var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link');

// this is a thing
var User = db.Model.extend({
  tableName: 'users',
  userLinks: function() {
    return this.hasMany(Link);
  }
  // userId: 'users ID'
  // username: 'users',
  // password: 'password'
  //session: 'session'
});

module.exports = User;
