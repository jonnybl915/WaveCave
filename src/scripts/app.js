import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import AppViewController from './app-view-controller.js'

const AppRouter = Backbone.Router.extend({
  routes: {
    "" : "ShowHomeView",
    "makeFilterPage" : "ShowMakeFilterPage",
    "sourceNodePage" : "sourceNodePage"
  },

  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
  });

  ShowHomeView: function() {
    console.log("hitting home page")
    ReactDOM.render(<AppViewController routedFrom="HomeView"/>, document.querySelector('#app-container'))
  },

  ShowMakeFilterPage: function(){
    ReactDOM.render(<AppViewController routedFrom="MakeFilterView"/>, document.querySelector('#app-container'))
  },
  sourceNodePage: function(){
    ReactDOM.render(<AppViewController routedFrom="SourceNode"/>, document.querySelector('#app-container'))
  },

  initialize: function(){
    Backbone.history.start();
  }
})

let app = new AppRouter;
