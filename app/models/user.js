var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

// this is a thing
var User = db.Model.extend({
});

module.exports = User;
