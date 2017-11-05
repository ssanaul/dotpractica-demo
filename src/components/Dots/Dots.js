import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {Icon} from 'semantic-ui-react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Dots extends Component {
constructor(props){
  super(props);

  this.state = {

  }
}
  render() {


  return ( <div className="row">

  <div className="col-lg-12">
    <Card>
      <CardHeader title={<h2>Connected dots</h2>}/>
      <Divider/>
      <CardMedia>
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
      </CardMedia>
    </Card>
  </div>

  </div> ); } } export default Dots;
