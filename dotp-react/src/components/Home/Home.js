import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Home extends Component { render() {
  const styles = {
    bigTextarea: {
      fontSize: '24px',
      width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      height: 200,
      minHeight: 100,
    }
  }
  return ( <div>
    <Card>
      <CardHeader
        title={<div>
          <h2>Week 3: Market Equilibrium</h2>
          <br/>
        </div>}
        subtitle={<div>
        <h1>Discussion topic: Why does cost of living vary so much between cities?</h1>
        </div>}
      />
      <CardMedia>
        <div className="row">
          <div className="col-md-6">
            <textarea style={styles.bigTextarea}/>
          </div>
          <div className="col-md-3">
            <h3>Assignments</h3>
          </div>
          <div className="col-md-3">
            <h3>Notes</h3>
          </div>
        </div>
      </CardMedia>
    </Card>
    <Card>
      <CardHeader
        title={<div>
          <h2>Notes</h2>
          <br/>
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
