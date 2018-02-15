import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MenuToolbar from '../containers/MenuToolbar'
import DisplayScreenshots from '../containers/DisplayScreenshots'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={1000}
      style={styles.gridList}
    >
        <GridTile>
          <MenuToolbar/>
        </GridTile>
        <GridTile>
          <DisplayScreenshots/>
        </GridTile>

    </GridList>
  </div>
);

export default GridListExampleSimple;
