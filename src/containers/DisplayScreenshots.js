import React, { Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ActionFace from 'material-ui/svg-icons/file/folder'
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';



class DisplayScreenshots extends Component {

  constructor (props) {
    super(props)
    this.renderScreenshots = this.renderScreenshots.bind(this)

}

  //need to fix and make pretty 
  renderScreenshots () {
      return this.props.screenshots.map((image, index) => {
        console.log(image.face[0])
        if(image.face[0].scores == undefined){
        
        return (
        <Paper zDepth={3}>
        <List>
          <Subheader>{"Face Stuff"}</Subheader>
          <tr key={image.id}>
          <td>
            <img src={image.src} alt='screenshot' height='80' />
            { <p> {JSON.stringify(image.face[0].faceAttributes)} </p>}
          </td>
          </tr>
            
            
       </List>
     </Paper>
      )
      } else {
        return (
          <Paper zDepth={3}>
          <List>
            <Subheader>{"Emotion"}</Subheader>
            <tr key={image.id}>
          <td>
            <img src={image.src} alt='screenshot' height='80' />
            { <p> {JSON.stringify(image.face[0].scores)} </p>}
          </td>
          </tr>
         </List>
       </Paper>
        )
      }
      })
    }



  render () {

    return (
      <MuiThemeProvider>
      <div>
          <Card zDepth={5}>
          <Toolbar>
              <ToolbarGroup>
                  <ActionFace />
                  <ToolbarSeparator />
                  <ToolbarTitle text="Results" style={{marginLeft: "10px"}}/>
              </ToolbarGroup>
          </Toolbar>
            {this.renderScreenshots()}
      </Card>
      </div>
    </MuiThemeProvider>

    )
  }
}

const mapStateToProps = (state) => {
  const screenshots = state.screenshots
  return {
    screenshots,

  }
}




export default connect(mapStateToProps)(DisplayScreenshots)
