import React, {Component, PropTypes} from 'react'
import AudioInputComponent from './audio-input-component.js'
import FilterListComponent from "./filter-list.component.js"

export default class HomeView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
           <div className="audioClipInputBox">
           <AudioInputComponent/>
           </div>

           <div className="filter-list">
           <FilterListComponent/>
           </div>
           </div>

  }
}
