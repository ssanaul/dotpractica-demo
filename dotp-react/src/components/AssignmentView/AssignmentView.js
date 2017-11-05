import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import {Icon, Progress} from 'semantic-ui-react';
import LinearProgress from 'material-ui/LinearProgress';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';
import {Paper} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

class AssignmentView extends Component {
  constructor(props){
    super(props);

    this.state = {
      assignmentIsDisplayed: false,
      selectedQuiz: null,
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
  return ( <div>
    <Paper style={{display: this.state.assignmentIsDisplayed?'none':''}}>
    <List>
      {
        this.props.quizzes.map(function(q, index){
        return  <ListItem
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
                    {/*<FlatButton label="Open" labelStyle={{color: 'white'}} backgroundColor="rgba(50, 175, 150, .9)"/>*/}
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
      <div style={{display: this.state.assignmentIsDisplayed?'':'none'}}>
      <FlatButton style={{borderBottom: '1px solid rgba(0,0,0,.3)'}} label="Go back"
      icon={<Icon name="arrow left" size="small" fitted/>}
      onClick={displayAll}/>
      {this.props.displays[this.state.selectedQuiz]}
      </div>
  </div> ); } } export default AssignmentView;
