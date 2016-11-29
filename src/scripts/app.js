// import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import AppViewController from './app-view-controller.js'

const AppRouter = Backbone.Router.extend({
  routes: {
    "" : "ShowHomeView",
    "makeFilterPage" : "ShowMakeFilterPage"
  },

  ShowHomeView: function() {
    console.log("hitting home page")
    ReactDOM.render(<AppViewController routedFrom="HomeView"/>, document.querySelector('#app-conainer'))
  },

  ShowMakeFilterPage: function(){
    ReactDOM.render(<AppViewController routedFrom="MakeFilterView"/>, document.querySelector('#app-conainer'))
  },

  initialize: function(){
    Backbone.history.start();
  }
})

let app = new AppRouter;
