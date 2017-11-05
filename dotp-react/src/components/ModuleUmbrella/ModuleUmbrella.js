import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {Icon} from 'semantic-ui-react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';

class ModuleUmbrella extends Component {
  constructor(props){
    super(props);

    this.state = {
      submissionReceived: false,
    }
  }
  render() {
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
  },
  moduleTitle: {
    color: 'rgb(20, 50, 100)',
  },
  umbrellaIcon: {
    width: '100%',
    margin: 'auto',
  },
  umbrellaAvatar: {
    backgroundColor: 'rgba(20, 50, 100, .7)',
    marginRight: 5,
  },
  submitButton: {
    color: 'white',
    float: 'right',
    width: '100%',
    marginBottom: 15,
  },
  umbrellaWrapper: {
    marginLeft: 5,
  },
  receivingIcon: {
    color: 'yellow',
  },
  receivingText:{
    color: 'rgba(0,0,0,.8)',
  },
  receivedIcon: {
    color: 'white',
  },
  receivedText: {
    color: 'rgb(40,170,90)',
  }
}

var handleSubmit = (event) => this.setState({submissionReceived: true});

  return ( <div>

  <Card>
    <CardHeader
      title={<div>
        <h2 style={styles.moduleTitle}>Week 3: Market Equilibrium</h2>
        <Divider/>
        <br/>
      </div>}
      subtitle={<div>
      <h1 style={{color: 'black', display: 'inline', marginRight: 10}}>
        <Avatar style={styles.umbrellaAvatar}
        children={<Icon style={styles.umbrellaIcon} name="umbrella" size="large"/>}/>
        Why does cost of living vary so much between cities?
      </h1>
      {this.state.submissionReceived?
      <span style={styles.receivedText}>Submission received! <Avatar
        backgroundColor='rgb(40,170,90)' children={<Icon style={styles.receivedIcon} name="thumbs outline up"/>}/>
      </span>
      :
      <span style={styles.receivingText}>
        Receiving submissions...<Avatar style={styles.receivingAvatar}
        backgroundColor='rgba(0,0,0,.5)' children={
          <Icon name="idea" style={styles.receivingIcon} fitted/>
        }/></span>
      }
      </div>
      }
    />
    <CardMedia>
      <div className="row">
        <div className="col-md-8">
          <div style={styles.umbrellaWrapper}>
            <textarea style={styles.bigTextarea}/>
            <FlatButton label="Submit" backgroundColor='rgba(50, 175, 150, .8)'
            style={styles.submitButton} onClick={handleSubmit}/>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Dots<Icon name="share alternate"/></h3>
          <Divider/>
        </div>
      </div>
    </CardMedia>
  </Card>

  </div> ); } } export default ModuleUmbrella;
