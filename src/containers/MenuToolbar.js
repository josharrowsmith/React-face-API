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
    this.handleCaptureButtonClick = this.handleCaptureButtonClick.bind(this)

    this.state = {
      capturing: false,
      text: 'Capture',
      active: true,
      Emotion: false,
      face: false
    }
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({
          active: !this.state.active,

      });
  }

  //fix toggle issues later
  toggleCapturing () {

        if (this.state.capturing) {
        this.setState({capturing: false, text: 'Capture'})
        } else if (this.state.capturing==false && this.state.Emotion==true) {
        this.setState(this.props.fetchEmotion.bind(this, this.props.webcam))
        this.setState({capturing: true, text: 'Stop Capturing', Emotion: false})
        }else {
        this.setState(this.props.fetchFace.bind(this, this.props.webcam))
        this.setState({capturing: true, text: 'Stop Capturing', Emotion: true})
      }
      }




  handleChange (event, index, value) {
    this.setState({value})
  }

  handleCaptureButtonClick () {
    this.toggleCapturing()
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
              <Toggle label="Detect" labelPosition="right" onToggle={this.handleCaptureButtonClick}/>
              <Toggle  label="Emotion" labelPosition="right" onToggle={this.handleCaptureButtonClick}/>
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
