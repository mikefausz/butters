var Backbone = require('backbone');
var TweetModel = require('./tweetModel.js');
var _ = require('underscore');
var templates = require('./templates.js');

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  collection: null,
  model: null,
  template: _.template(templates.newTweet),
  events: {
    'submit form': 'addTweet',
  },
  addTweet: function (event) {
    event.preventDefault();
    console.log("addTweet");
    this.model.set({
      content: this.$el.find('input').val(),
    });
    this.$el.find('input').val('');
    this.collection.create(this.model);
    this.model = new TweetModel({});
  },
  initialize: function () {
    if(!this.model) {
      this.model = new TweetModel({});
    }
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
