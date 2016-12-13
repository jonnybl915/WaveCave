import React, {Component, PropTypes} from 'react'

export default class AudioInputComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return <div className="audioInputForm">
            <input type="file" accept="audio/*" className="uploadAudioButton"></input>
           </div>
  }

}
