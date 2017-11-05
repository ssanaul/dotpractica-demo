import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

import Home from '../Home/Home';
import Display from '../Display/Display';
import AssignmentView from '../AssignmentView/AssignmentView';
import Dots from '../Dots/Dots';
import Syllabus from '../Syllabus/Syllabus';
import Gradebook from '../Gradebook/Gradebook';

class Demo extends Component {
  constructor(props){
    super(props);

    this.state = {
      demoModalOpen: true,
      componentDisplayed: 'home',
      classChooserIsOpen: false,
      anchorEl: null,
      otherView: 'educator',
      studentView: true,
    }
  }
  handleDemoModalClose = () => this.setState({demoModalOpen: false});
  handleChange = (value) => this.setState({componentDisplayed: value});
  handleTouchTapClassChooser = (event) => {
    event.preventDefault();
    this.setState({
      classChooserIsOpen: !this.state.classChooserIsOpen,
      anchorEl: event.currentTarget,
    });
  };
  handleRequestClose = () => this.setState({classChooserIsOpen: false});
  switchView = () => this.setState({
    studentView: !this.state.studentView,
    otherView: this.state.otherView==='educator'?'student':'educator',
    componentDisplayed: this.state.studentView?'discussion':'home',
  });
  render() {
  const styles = {
    modal: {
      height: 350,
    },
    navBar: {
      backgroundColor: 'rgb(20, 70, 70)',
      color: 'white',
      height: 50,
    },
    beginButton: {
      backgroundColor: 'rgb(50, 175, 150)',
      color: 'white',
      float: 'right',
    },
    tabs: {
      width: '90%',
    },
    tab: {
      backgroundColor: 'rgb(20, 70, 70)',
    },
    inkBar: {
      backgroundColor: 'rgb(50, 175, 150)',
    },
    classChooserIcon: {
      cursor: 'pointer',
      marginBottom: 15,
      marginRight: 15,
    }
  }
  return ( <div>
      <AppBar
      style={styles.navBar}
      title={this.state.studentView?
        <Tabs style={styles.tabs}
          inkBarStyle={styles.inkBar}
          onChange={this.handleChange}>
          <Tab label="Dashboard" style={styles.tab} value="home" disableTouchRipple={true}>
          </Tab>
          <Tab label="Assignments" style={styles.tab} value="assignments" disableTouchRipple={true}>
          </Tab>
          <Tab label="Dots" style={styles.tab} value="dots" disableTouchRipple={true}>
          </Tab>
          <Tab label="Grades" style={styles.tab} value="grades" disableTouchRipple={true}>
          </Tab>
        </Tabs>
        :
        <Tabs style={styles.tabs}
          inkBarStyle={styles.inkBar}
          onChange={this.handleChange}>
          <Tab label="Discussion" style={styles.tab} value="discussion" disableTouchRipple={true}>
          </Tab>
          <Tab label="Assignments" style={styles.tab} value="feedback" disableTouchRipple={true}>
          </Tab>
          <Tab label="Analytics" style={styles.tab} value="analytics" disableTouchRipple={true}>
          </Tab>
          <Tab label="Grades" style={styles.tab} value="grades-edu" disableTouchRipple={true}>
          </Tab>
        </Tabs>
      }
      iconElementLeft={
        <span style={{marginRight: 20}}>
          <Icon
            name='content'
            size='big'
            style={styles.classChooserIcon}
            onClick={this.handleTouchTapClassChooser}/>
          <h2 style={{display:'inline'}}>Microeconomics</h2>
          <Popover
            open={this.state.classChooserIsOpen}
            anchorEl={this.state.anchorEl}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem disabled={true} style={{color: 'black'}} primaryText='Classes:'/>
              <Divider/>
              <MenuItem primaryText='History'/>
              <MenuItem primaryText='Philosophy'/>
              <MenuItem primaryText='Physics'/>
              <Divider/>
              <MenuItem onClick={this.switchView} primaryText={<i>Switch to {this.state.otherView} view</i>}/>
            </Menu>
          </Popover>
        </span>}
      iconElementRight={
        <img alt="dotp-logo" src='dotp.PNG' width={33} height={33}/>
      }
      />

      <div style={{display: this.state.studentView?'':'none'}}>

      <div style={{display: this.state.componentDisplayed==='home'?'':'none'}}>
        <Home quizzes={this.props.title}/>
      </div>
      <div style={{display: this.state.componentDisplayed==='assignments'?'':'none'}}>
        <AssignmentView displays={this.props.displays} quizzes={this.props.quizzes}/>
      </div>
      <div style={{display: this.state.componentDisplayed==='dots'?'':'none'}}>
        <Dots/>
      </div>
      <div style={{display: this.state.componentDisplayed==='syllabus'?'':'none'}}>
        <Syllabus/>
      </div>
      <div style={{display: this.state.componentDisplayed==='gradebook'?'':'none'}}>
        <Gradebook/>
      </div>

      </div>

      <div style={{display: this.state.studentView?'none':''}}>
        <div style={{display: this.state.componentDisplayed==='discussion'?'':'none'}}>
        <Card>
          <CardHeader title={<h2>Feed</h2>}/>
          <Divider/>
          <CardMedia>
            <List>
              <ListItem/>
            </List>
          </CardMedia>
        </Card>
        </div>
        <div style={{display: this.state.componentDisplayed==='feedback'?'':'none'}}>

        </div>
        <div style={{display: this.state.componentDisplayed==='analytics'?'':'none'}}>

        </div>
        <div style={{display: this.state.componentDisplayed==='syllabus-edu'?'':'none'}}>

        </div>
        <div style={{display: this.state.componentDisplayed==='gradebook-edu'?'':'none'}}>

        </div>
      </div>



    <Modal
      open={this.state.demoModalOpen}
      style={styles.modal}
      onClose={this.handleDemoModalClose}>
    <Modal.Header>Welcome to the demo for DotPractica!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='dotp.PNG' />
      <Modal.Description>
        <Header>DotPractica streamlines the formative assessment and discussion
         process for schools.</Header>
        <p>During this demo, you can engage the app as both a student and an educator
        participating in an introductory economics course.</p>
        <p>Learn more about our mission
        at <a target="_blank" rel="noopener noreferrer" href="http://dotpractica.com">dotpractica.com</a>
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button
          style={styles.beginButton}
          content='Begin'
          onClick={this.handleDemoModalClose}
        />
      </Modal.Description>
    </Modal.Content>
  </Modal>

  </div> ); } } export default Demo;
