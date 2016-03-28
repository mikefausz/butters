var Backbone = require('backbone');
var TweetModel = require('./tweetModel');

module.exports = Backbone.Collection.extend({
  model: TweetModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/butters',
  initialize: function () {
    console.log('new collection created');
  }
});
