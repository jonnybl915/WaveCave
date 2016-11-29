import React from 'react'
import ReactDom from 'react-dom'
import SourceNode from './sourceNode.component.js'

console.log('hello');
window.addEventListener('load', function(){
  console.log('hello');
  ReactDom.render(< SourceNode />, document.getElementById('app-container'))
})
