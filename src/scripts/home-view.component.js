import React, {Component, PropTypes} from 'react'
import AudioInputComponent from './audio-input-component.js'

export default class HomeView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="audioClipInputBox">
           <AudioInputComponent/>
           </div>
  }
}
