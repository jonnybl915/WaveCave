import React, { Component, PropTypes } from 'react'


export default class SourceNode extends Component {
  constructor(props) {
    super(props)
    let self = this

    fetch(this.props.url)
      .then(resp => resp.arrayBuffer())
      .then(arrayBuffer => this.props.audioCtx.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        /***************************
        * The Phasing effect will a form of the moiré pattern:
        * Two simple identical geometrical patterns are superimposed to give rise
        * to something much more complex than the original.
        * --- *
        * Here we are using two audio loops.
        ***************************/
        self.state = {
          audioBuffer: audioBuffer,
          nodes: []
        }

      })
      .catch(err => console.log(err))

      console.log(this);
  }

  _playNode() {
    console.log(this.state);
    this.startLoop(this.state.audioBuffer, -1)
    // this.startLoop(this.state.audioBuffer, 1, 1.002)
  }

  _stopNode(srcNode) {
    console.log(this);
    this.state.nodes.forEach(function(e){
      console.log('eh', e);
      e.stop()
    })
  }

  startLoop(audioBuffer, pan = 0, rate = 1) {
    console.log('test');
    let srcNode = this.props.audioCtx.createBufferSource()
    let panNode = this.props.audioCtx.createStereoPanner()
    /***************************
    * create nodes and chain them to destination
    * set loop start/end. Then play loop
    * --- *
    * this is the basic Web Audio API flow
    * 2 node audio-processing graph
    ***************************/
    srcNode.buffer = audioBuffer
    srcNode.loop = true
    srcNode.loopStart = 14.98
    srcNode.loopEnd = 15.80
    srcNode.playbackRate.value = rate

    panNode.pan.value = pan

    srcNode.connect(panNode)
    panNode.connect(this.props.audioCtx.destination)
    /***************************
    * @param when to start playing. 0 means immediately.
    * @param offset at which to start. Set to beginning of loop.
    ***************************/

    srcNode.start(0, srcNode.loopStart)

    let nodes = this.state.nodes.map(function(e){
      return e
    })
    nodes.push(srcNode)
    this.setState({nodes: nodes})
    console.log('end of play', this.state)
}

  render() {
    return(
      <div>
        <button onClick={this._playNode.bind(this)} >Play</button>
        <button ref={'stopBtn'} onClick={this._stopNode.bind(this)} >Stop</button>
      </div>
    )
  }
}

SourceNode.defaultProps = {
  url: '../jackals.wav',
  audioCtx: new AudioContext()
}
