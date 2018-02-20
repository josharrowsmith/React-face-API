import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FontIcon from 'material-ui/FontIcon'
import Camera from './Camera'
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import DisplayScreenshots from './DisplayScreenshots'
import Welcome from '../containers/Welcome'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFace, fetchEmotion } from '../actions'

class MenuToolbar extends React.Component {

  constructor (props) {
    super(props)
    this.ToggleFace = this.ToggleFace.bind(this);
    this.ToggleEmotion = this.ToggleEmotion.bind(this);

    this.state = {
      capturing: false,
      text: 'Capture',
      active: true,
      isOpen1: false,
      isOpen2: false
    }
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({
          active: !this.state.active,

      });
  }

  ToggleFace() {
    this.setState({
      isOpen1: !this.state.isOpen1
    });
    if (this.state.capturing) {
      this.setState({capturing: false, text: 'Capture'})
    } else {
    this.setState(this.props.fetchFace.bind(this, this.props.webcam))
    this.setState({capturing: true})
    }
  }

  ToggleEmotion() {
    this.setState({
      isOpen2: !this.state.isOpen2
    });
    if (this.state.capturing) {
      this.setState({capturing: false, text: 'Capture'})
    } else {
    this.setState(this.props.fetchEmotion.bind(this, this.props.webcam))
    this.setState({capturing: true})
    }
  }

  handleChange (event, index, value) {
    this.setState({value})
  }



  render () {
    return (
      <MuiThemeProvider>
        <div>
        <Card zDepth={5}>
          <CardMedia>
            <Welcome/>
          </CardMedia>
            <CardActions>
              {this.state.active && <Camera />}
              <Toggle label="Camera" labelPosition="right" onToggle={this.handleClick}/>
              <Toggle label="Detect" labelPosition="right"   onToggle={this.ToggleFace}/>
              <Toggle  label="Emotion" labelPosition="right"  onToggle={this.ToggleEmotion}/>
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>

    )
  }
}

const mapStateToProps = (state) => {
  const webcam = state.webcam

  return {
    webcam,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchFace, fetchEmotion }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuToolbar)
