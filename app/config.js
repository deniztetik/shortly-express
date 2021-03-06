
var path = require('path');
var db = require('knex')({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'password',
    database: 'shortlydb',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/shortly.sqlite')
  }
});

db.schema.hasTable('urls').then(function(exists) {
  if (!exists) {
    db.schema.createTable('urls', function (link) {
      link.increments('id').primary();
      link.string('url', 255);
      link.string('base_url', 255);
      link.string('code', 100);
      link.string('title', 255);
      link.integer('visits');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.schema.hasTable('clicks').then(function(exists) {
  if (!exists) {
    db.schema.createTable('clicks', function (click) {
      click.increments('id').primary();
      click.integer('link_id');
      click.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.schema.hasTable('users').then(function(exists) {
  if(!exists) {
    db.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('username',100);
      user.string('password',100);
      user.string('email',100);
      user.timestamps();
    }).then(function(table) {
      console.log("Created Table", table);
    });
  }
});

/************************************************************/
// Add additional schema definitions below
/************************************************************/

//need to add more schema here
var Bookshelf = require('bookshelf')(db);
module.exports = Bookshelf;
