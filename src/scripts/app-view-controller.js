import React, {Component, PropTypes} from 'react'
import HomeView from './homeview.component.js'

export default class AppViewController extends Component {

  constructor(props) {
  super(props);
  }

  render: function(){

        switch (this.props.routedFrom){

           case "HomeView":
              return <HomeView/>
              break;

           case "MakeFilterView":
              return <MakeFilterView/>
              break;
        }
     }
}
