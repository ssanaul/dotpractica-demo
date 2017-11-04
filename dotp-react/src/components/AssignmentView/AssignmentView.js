import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import {Icon, Progress} from 'semantic-ui-react';
import LinearProgress from 'material-ui/LinearProgress';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';
import {Paper} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

class AssignmentView extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }
  render() {
    var gatherNested = (q) => {
      let gathered = [];
      q.props.problems.forEach(function(p){
        gathered.push(<ListItem>
            <Icon name="chevron right"/>
            {p.props.title}
          </ListItem>);
      });
      return gathered;
    }
    var nestedAreOpen = this.state.nestedAreOpen;
  return ( <div>
    <Paper>
    <List>
      {this.props.quizzes.map(function(q){
        return  <ListItem
                  nestedItems={gatherNested(q)}
                  innerDivStyle={{paddingRight: '16px'}}>
                  <Toolbar style={{backgroundColor: 'rgba(10, 20, 20, .1)', borderRadius: 2}}>
                  <ToolbarGroup firstChild={true}>
                    <ToolbarTitle
                      style={{color: 'rgb(10, 20, 20)', marginLeft: 25}}
                      text={q.props.title}
                    />
                  </ToolbarGroup>
                  <ToolbarGroup lastChild={true} style={{width: 333, marginRight: 50}}>
                    <FlatButton label="Open" labelStyle={{color: 'white'}} backgroundColor="rgba(50, 175, 150, .9)"/>
                    <span style={{fontSize: '12px'}}>Completion:</span>
                    <LinearProgress mode='determinate' value={30}/>
                  </ToolbarGroup>
                  </Toolbar>
                </ListItem>
      })
    }
    </List>
    </Paper>

  </div> ); } } export default AssignmentView;
