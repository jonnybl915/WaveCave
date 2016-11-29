import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ViewTemplate from './view-controller.js'

const AppRouter = Backbone.Router.extend({
  routes: {
    "" : "ShowHomeView",
    "makeFilterPage" : "ShowMakeFilterPage"
  },

  ShowHomeView: function() {
    console.log("hitting home page")
    ReactDOM.render(<ViewTemplate/>)
  },

  ShowMakeFilterPage: function(){

  },

  initialize: function(){
    Backbone.history.start();
  }
})

let app = new AppRouter;
