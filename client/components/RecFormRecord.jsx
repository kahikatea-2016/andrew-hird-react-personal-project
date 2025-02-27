import React from 'react'

export default React.createClass({
  handleClipNameChange(e) {
    this.setState({clipName: e.target.value})
  },
  handleRecordistChange(e) {
    this.setState({recordist: e.target.value})
  },
  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  },
  render() {
    return (
      <div>
      <audio controls="controls" src={this.props.audioBlob}></audio>
      <br/>
        <input type="text" placeholder="Clip Name" onChange={this.handleClipNameChange}/>
        <input type="text" placeholder="Recordist" onChange={this.handleRecordistChange} />
        <input type="text" placeholder="Description" onChange={this.handleDescriptionChange} />
        <br />
        <input
          type="button"
          value="Submit Sound"
          onClick={() => this.props.submitRec(this.state.clipName, this.state.recordist, this.state.description)} />
      </div>
    )
  }
})
