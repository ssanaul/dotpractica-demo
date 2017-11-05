import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {Icon} from 'semantic-ui-react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import {Scrollbars} from 'react-custom-scrollbars';

class ModuleUmbrella extends Component {
  constructor(props){
    super(props);

    this.state = {
      submissionReceived: false,
      umbrellaValue: '',
    }
  }
  render() {
const styles = {
  umbrellaTextarea: {
    fontSize: '24px',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: 300,
    minHeight: 100,
    border: '2px solid rgba(0,0,0,.1)',
    outline: 'none',
  },
  moduleTitle: {
    color: 'rgb(20, 50, 100)',
    fontSize: '18px'
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
    color: 'rgba(0,100,150,.7)',
  },
  receivedIcon: {
    color: 'white',
  },
  receivedText: {
    color: 'rgb(40,170,90)',
  },
}

var handleSubmit = (event) => this.setState({submissionReceived: true});
var updateUmbrellaValue = (event) => this.setState({umbrellaValue: event.currentTarget.value});

  return ( <div>

  <Card>
    <CardHeader
      title={<div>
        <br/>
        <div>
          <p style={styles.moduleTitle}>Week 3: Market Equilibrium</p>
        </div>
        <Divider/>
        <br/>
      </div>}
      subtitle={<div>
      <h1 style={{color: 'black', display: 'inline', marginRight: 10}}>
        <Avatar style={styles.umbrellaAvatar}
        children={<Icon style={styles.umbrellaIcon} name="umbrella" size="large"/>}/>
        Why does cost-of-living vary so much between cities?
      </h1>
      {this.state.submissionReceived?
      <span style={styles.receivedText}>Submission received! <Avatar size={30}
        backgroundColor='rgb(40,170,90)' style={styles.receivedAvatar} children={
          <Icon style={styles.receivedIcon} name="thumbs outline up" size="large" fitted/>
        }/>
      </span>
      :
      <span style={styles.receivingText}>
        Your teacher is now taking submissions...<CircularProgress size={15} thickness={5}/>
        </span>
      }
      </div>
      }
    />
    <CardMedia>
      <div className="row">
        <div className="col-md-7">
          <div style={styles.umbrellaWrapper}>
            <textarea onInput={updateUmbrellaValue} value={this.state.umbrellaValue}
            style={styles.umbrellaTextarea} placeholder="Type your inference here..."/>
            <FlatButton label="Submit" backgroundColor='rgba(50, 175, 150, .9)'
            style={styles.submitButton} onClick={handleSubmit}/>
          </div>
        </div>
        <div className="col-md-5">
          <h3><Icon name="share alternate" circular/>Dots</h3>
          <Divider/>
          <Scrollbars style={{height: 290}}>
          <List>

          <ListItem leftAvatar={<Avatar size={20} style={{marginTop: 15}} backgroundColor='rgba(50, 175, 150, .9)'
          icon={<Icon name="radio" circular fitted/>}/>}
primaryText={<div style={{marginBottom: 10}}>
  <span>Why do students usually benefit from studying in groups?</span>
<span style={{color: 'green'}}> Different students tend to have different skills. The principle of trade states that individuals should focus on a specialty.</span>
<br/>
<span><Icon name="compress" size="small" style={{float: 'right'}} fitted circular/></span>
</div>}
disableTouchRipple={true}/>

<Divider/>

          <ListItem leftAvatar={<Avatar size={20} style={{marginTop: 15}} backgroundColor='rgba(50, 175, 150, .9)'
          icon={<Icon name="radio" circular fitted/>}/>}
primaryText={<div style={{marginBottom: 10}}>
  <span>On Saturday afternoon, you can go out with friends,
watch a movie, or wash your car. Your opportunity cost of washing your car would be: </span>
<span style={{color: 'green'}}>the value of going out with friends OR watching a movie</span>
<br/>
<span><Icon name="compress" size="small" style={{float: 'right'}} fitted circular/></span>
</div>}
disableTouchRipple={true}/>

<Divider/>

<ListItem leftAvatar={<Avatar size={20} style={{marginTop: 15}} backgroundColor='rgba(50, 175, 150, .9)'
  icon={<Icon name="radio" circular fitted/>}/>}
  primaryText={<div style={{marginBottom: 10}}>
  <span>You and your roommate are dividing up household chores. The principle of
  trade tells you that it would be more efficient if: </span>
  <span style={{color: 'green'}}>one of you washes all the dishes while the other
  does a different chore</span>
  <br/>
  <span><Icon name="compress" size="small" style={{float: 'right'}} fitted circular/></span>
  </div>}
  disableTouchRipple={true}/>

<Divider/>

<ListItem leftAvatar={<Avatar size={20} style={{marginTop: 15}} backgroundColor='rgba(50, 175, 150, .9)'
  icon={<Icon name="radio" circular fitted/>}/>}
  primaryText={<div style={{marginBottom: 10}}>
  <span>Why did the number of American farmers decline since 1950?</span>
  <span style={{color: 'green'}}> Since technology has advanced, farmers have been more productive. They have been able to produce more crops, which decreased their cost. So, many farmers chose different careers.</span>
  <br/>
  <span><Icon name="compress" size="small" style={{float: 'right'}} fitted circular/></span>
  </div>}
  disableTouchRipple={true}/>

<Divider/>

<ListItem leftAvatar={<Avatar size={20} style={{marginTop: 8}} backgroundColor='rgba(50, 175, 150, .9)' disabled
icon={<Icon name="radio" circular fitted/>}/>}
primaryText={<div style={{marginBottom: 10}}>
<span>When there is a shortage of a good, we expect the price will: </span>
<span style={{color: 'green'}}>increase</span><br/>
<br/>
<span><Icon name="compress" style={{float: 'right'}} size="small" fitted circular/></span>
</div>}
disableTouchRipple={true}/>
<Divider/>


<ListItem leftAvatar={<Avatar size={20} style={{marginTop: 8}} backgroundColor='rgba(50, 175, 150, .9)' disabled
icon={<Icon name="radio" circular fitted/>}/>}
primaryText={<div style={{marginBottom: 10}}>
<span>When there is a surplus of a good, we expect the price will: </span>
<span style={{color: 'green'}}>decrease</span><br/>
<br/>
<span><Icon name="compress" style={{float: 'right'}} size="small" fitted circular/></span>
</div>}
disableTouchRipple={true}/>


          </List>
          </Scrollbars>
        </div>
      </div>
    </CardMedia>
  </Card>

  </div> ); } } export default ModuleUmbrella;
