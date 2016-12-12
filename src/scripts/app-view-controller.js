import React, {Component, PropTypes} from 'react'
import HomeView from './home-view.component.js'
import MakeFilterView from './make-filter-view.component.js'
import SourceNode from './sourceNode.component.js'

export default class AppViewController extends Component {

  constructor(props) {
  super(props);
  }

  render() {

        switch (this.props.routedFrom){

           case "HomeView":
              return <HomeView/>
              break;

           case "MakeFilterView":
              return <MakeFilterView/>
              break;

           case "SourceNode":
              return <SourceNode/>
              break;
        }
     }
}
