import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Paper } from 'material-ui';
import AssignmentView from '../AssignmentView/AssignmentView';
import Divider from 'material-ui/Divider';

class Home extends Component { render() {
  const styles = {
    bigTextarea: {
      fontSize: '24px',
      width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      height: 200,
      minHeight: 100,
      border: '2px solid rgba(0,0,0,.1)',
      outline: 'none',
    }
  }
  return ( <div>
    <Card>
      <CardHeader
        title={<div>
          <h2>Week 3: Market Equilibrium</h2>
          <Divider/>
          <br/>
        </div>}
        subtitle={<div>
        <h1 style={{color: 'black'}}>Why does cost of living vary so much between cities?</h1>
        </div>}
      />
      <CardMedia>
        <div className="row">
          <div className="col-md-8">
            <textarea style={styles.bigTextarea}/>
          </div>
          <div className="col-md-4">
            <h3>Nodes</h3>
          </div>
        </div>
      </CardMedia>
    </Card>
    <Card>
      <CardHeader
        title={<div>
          <h2>Notes</h2>
          </div>}
      />
      <CardMedia>
        <div>
          <textarea style={styles.bigTextarea}/>
        </div>
      </CardMedia>
    </Card>
    <Card>
      <CardHeader
        title={<div>
          <h2>Announcements</h2>
          <br/>
          </div>}
        subtitle='No announcements yet...'
      />
      <CardMedia>
        <div className="row">
        </div>
      </CardMedia>
    </Card>

  </div> ); } } export default Home;
