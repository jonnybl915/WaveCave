import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import SourceNode from './sourceNode.component.js'
// import Backbone from 'backbone'
// import AppViewController from './app-view-controller.js'
//
// const AppRouter = Backbone.Router.extend({
//   routes: {
//     "" : "ShowHomeView",
//     "makeFilterPage" : "ShowMakeFilterPage"
//   },
//
//   ShowHomeView: function() {
//     console.log("hitting home page")
//     ReactDOM.render(<AppViewController routedFrom="HomeView"/>, document.getElementById('#app-container'))
//   },
//
//   ShowMakeFilterPage: function(){
//     ReactDOM.render(<AppViewController routedFrom="MakeFilterView"/>, document.getElementById('#app-container'))
//   },
//
//   initialize: function(){
//     Backbone.history.start();
//   }
// })
//
// let app = new AppRouter;

ReactDOM.render(<SourceNode />, document.getElementById('app-container'))
