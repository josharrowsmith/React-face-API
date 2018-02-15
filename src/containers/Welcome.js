import React, { Component } from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ActionFace from 'material-ui/svg-icons/action/face';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Welcome extends Component {
  render () {
    return (
      <MuiThemeProvider>
              <div>
                  <Toolbar>
                      <ToolbarGroup>
                          <ActionFace />
                          <ToolbarSeparator />
                          <ToolbarTitle text="Face Recognition " style={{marginLeft: "10px"}}/>
                      </ToolbarGroup>
                  </Toolbar>
                </div>
      </MuiThemeProvider>
    )
  }
}

export default Welcome
