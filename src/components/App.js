import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Table from '../containers/table'


export default class App extends Component {
  render () {
    return (
      <div>
          <MuiThemeProvider>
            <Table/>
          </MuiThemeProvider>

      </div>
    )
  }
}
