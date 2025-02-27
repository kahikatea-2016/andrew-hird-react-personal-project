import React from 'react'

export default React.createClass({
  render() {
      let name = null
      if(this.props.clipName) {
        name = <h3>{this.props.author} - {this.props.clipName}</h3>
      } else {
        name = <h3>{this.props.fileName}</h3>
      }

      let description = null
      if(this.props.clipDescription) {
        description = <em>{this.props.clipDescription}</em>
      } else {
        description = " "
      }
    return (
        <div id="recList">
          {name}
          <audio controls="controls" src ={'https://s3-us-west-2.amazonaws.com/audio-foley-base/' + this.props.fileName}></audio>
          <br/>
          {description}
          <br/>
          <a href={'https://s3-us-west-2.amazonaws.com/audio-foley-base/' + this.props.fileName}>
            <button>download</button>
          </a>
          <button onClick={() => this.props.delAudio(this.props.fileName)}>delete</button>
         <hr/>
      </div>
    )
  }
})
