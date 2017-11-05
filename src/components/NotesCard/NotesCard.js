import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui';

class NotesCard extends Component { render() {
  const styles = {
    bigTextarea: {
      fontSize: '22px',
      width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      height: 200,
      minHeight: 100,
      border: '2px solid rgba(0,0,0,.1)',
      borderLeft: 'none',
      borderRight: 'none',
      outline: 'none',
      marginBottom: 0,
      paddingBottom: 0,
      borderBottom: 'none',
    },
    toolbar: {
      height: 25,
    }
  }
  return ( <div>

  <Card>
    <CardHeader
      title={<div>
        <h2>Notes</h2>
        </div>}
    />
    <CardMedia>
      <div>
        {/*<Toolbar style={styles.toolbar}>
          <ToolbarGroup>
            <ToolbarTitle text='Options'/>
          </ToolbarGroup>
        </Toolbar>*/}
        <textarea placeholder='Type your notes here...' style={styles.bigTextarea}/>
      </div>
    </CardMedia>
  </Card>

  </div> ); } } export default NotesCard;
