import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import {Icon, Progress} from 'semantic-ui-react';
import LinearProgress from 'material-ui/LinearProgress';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';
import {Paper} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

class AssignmentView extends Component {
  constructor(props){
    super(props);

    this.state = {
      assignmentIsDisplayed: false,
      selectedQuiz: null,
      values: {
        0: 80,
        1: 100
      }
    }

    this.setSelected = this.setSelected.bind(this);
  }
  setSelected = function(event, q){
    this.setState({selectedQuiz: q});
  };
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
        color: 'rgb(0, 10, 20)',
        marginLeft: 25,
        paddingRight: 0,
      },
      toolbar: {
        backgroundColor: 'rgba(0, 10, 20, .05)',
        borderRadius: 2,
      },

    }
    var gatherNested = (q) => {
      let gathered = [];
      q.props.problems.forEach(function(p){
        gathered.push(<ListItem>
            <Icon name="selected radio" size="small" inverted/>
            {p.props.title}
            {p.props.inputType==="umbrella"?<span>
            <Avatar children={
              <Icon name="umbrella" style={styles.umbrellaIcon}/>}
              style={styles.umbrellaAvatar}/>
              <Divider style={{marginTop: 10}}/>
              </span>:''}
          </ListItem>);
      });
      return gathered;
    };
    var nestedAreOpen = this.state.nestedAreOpen;
    var setSelected = (q) => this.setState({
        assignmentIsDisplayed: true,
        selectedQuiz: q,
    });
    var displayAll = (event) => this.setState({
      assignmentIsDisplayed: false,
      selectedQuiz: null,
    });
    var getValue = (index) => {
      return this.state.values[index];
    }
  return ( <div>
    <Paper style={{display: this.state.assignmentIsDisplayed?'none':''}}>
    <RaisedButton style={{float: 'right'}} label={<span>Sort by
    <Icon name="caret" style={{marginLeft: 5, marginTop: 10}} fitted/></span>}/>
    <List>
      <Subheader>Open</Subheader>
      <ListItem
          key={2}
          innerDivStyle={{paddingRight: '16px'}}
          onClick={()=>setSelected(2)}>
          <Toolbar style={styles.toolbar}>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle
              style={styles.toolbarTitle}
              text='Market Equilibrium'
            />
            <span style={{marginTop: 4, marginLeft: 20,
              fontSize: '12px', color: 'rgba(200,50,10,.7)'}}>
            DUE TUESDAY 11/7
            </span>
          </ToolbarGroup>
          <ToolbarGroup lastChild={true} style={{width: 420, marginRight: 50}}>
            <LinearProgress mode='determinate' value={40} style={{height: 7, borderRadius: 3}}/>
          </ToolbarGroup>
          </Toolbar>
        </ListItem>
      </List>
    <List>
    <Subheader>Completed</Subheader>
      {
        this.props.quizzes.map(function(q, index){
        return  <ListItem style={{display:q.props.completed?'':'none'}}
                  key={index}
                  nestedItems={gatherNested(q)}
                  innerDivStyle={{paddingRight: '16px'}}
                  onClick={()=>setSelected(q.props.value)}>
                  <Toolbar style={styles.toolbar}>
                  <ToolbarGroup firstChild={true}>
                    <ToolbarTitle
                      style={styles.toolbarTitle}
                      text={q.props.title}
                    />
                  </ToolbarGroup>
                  <ToolbarGroup lastChild={true} style={{width: 420, marginRight: 50}}>
                    <LinearProgress mode='determinate' color='green' value={getValue(q.props.value)}
                    style={{height: 7, borderRadius: 3, backgroundColor: 'rgba(200,50,10,.7)'}}/>
                  </ToolbarGroup>
                  </Toolbar>
                </ListItem>
      })
    }
    </List>
    </Paper>
      <div style={{display: this.state.assignmentIsDisplayed?'':'none'}}>
      <Toolbar style={{height: 40, backgroundColor: 'rgba(250,250,250,.9)',
      border: '1px solid rgba(0,0,0,.01)', borderRadius: 3, marginTop: 5}}>
        <ToolbarGroup firstChild={true}>
          <RaisedButton label="Go back" style={{marginLeft: 5}}
          icon={<Icon name="arrow left" size="small" fitted/>}
          onClick={displayAll}/>
          {/*<RaisedButton label="Show feedback" style={{marginLeft: 5}}/>*/}
        </ToolbarGroup>
      </Toolbar>
      {this.props.displays[this.state.selectedQuiz]}
      </div>
  </div> ); } } export default AssignmentView;
