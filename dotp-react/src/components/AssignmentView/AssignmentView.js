import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import {Icon, Progress} from 'semantic-ui-react';
import LinearProgress from 'material-ui/LinearProgress';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';
import {Paper} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

class AssignmentView extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    const styles = {
      umbrellaIcon: {
        width: '100%',
        margin: 'auto',
      },
      umbrellaAvatar: {
        marginLeft: 5,
        backgroundColor: 'rgba(20, 50, 100, .7)',
      },
      toolbarTitle: {
        color: 'rgb(10, 20, 20)',
        marginLeft: 25,
        paddingRight: 0,
      },
      toolbar: {
        backgroundColor: 'rgba(10, 20, 20, .1)',
        borderRadius: 2
      },

    }
    var gatherNested = (q) => {
      let gathered = [];
      q.props.problems.forEach(function(p){
        gathered.push(<ListItem>
            <Icon name="chevron circle right" size="medium"/>
            {p.props.title}
            {p.props.inputType==="umbrella"?<Avatar children={
              <Icon name="umbrella" style={styles.umbrellaIcon}/>}
              style={styles.umbrellaAvatar}
              />:''}
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
                  <Toolbar style={styles.toolbar}>
                  <ToolbarGroup firstChild={true}>
                    <ToolbarTitle
                      style={styles.toolbarTitle}
                      text={q.props.title}
                    />
                    <FlatButton label="Open" labelStyle={{color: 'white'}} backgroundColor="rgba(50, 175, 150, .9)"/>
                  </ToolbarGroup>
                  <ToolbarGroup lastChild={true} style={{width: 420, marginRight: 50}}>
                    <LinearProgress mode='determinate' value={30} style={{height: 7, borderRadius: 3}}/>
                  </ToolbarGroup>
                  </Toolbar>
                </ListItem>
      })
    }
    </List>
    </Paper>

  </div> ); } } export default AssignmentView;
