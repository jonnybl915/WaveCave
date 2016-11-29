import React, {Component, PropTypes} from 'react'

export default class AudioInputComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return <div className="audioInputForm">
            <button id="uploadAudioButton" className="uploadAudioButton">Upload Audio</button>
           </div>
  }

}
