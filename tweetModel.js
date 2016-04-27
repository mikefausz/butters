var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/butters',
  idAttribute: "_id",
  defaults: {
		author: 'Butters',
    avatar: 'https://thenpbhive.files.wordpress.com/2009/11/sp813_cartmans_incredible_gift.jpg',
		handle: 'ProfChaos',
		date: 'Mar 16',
		content: 'This is a tweet',
	},
  initialize: function (stuff) {
    console.log("new tweet model created: ");
    console.log(stuff);
  }
});
