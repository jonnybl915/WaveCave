import React, { Component, PropTypes } from 'react'


export default class SourceNode extends Component {
  constructor(props) {
    super(props)
  }


  componentWillMount() {
    let request = new XMLHttpRequest()
    request.open('GET', this.props.url, true)
  }

  _playNode() {

  }

  render() {
    return(
      <div>
        <button onClick={this._playNode} >Play</button>
        <button onClick={this._stopNode} >Stop</button>
      </div>
    )
  }
}

SourceNode.defaultProps = {
  url: '../jackals.wav'
}
