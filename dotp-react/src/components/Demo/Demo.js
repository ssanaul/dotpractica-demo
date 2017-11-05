import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

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
  render() {
  const styles = {
    modal: {
      height: 400,
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
      title={
        <Tabs style={styles.tabs}
          inkBarStyle={styles.inkBar}
          onChange={this.handleChange}>
          <Tab label="Home" style={styles.tab} value="home" disableTouchRipple={true}>
          </Tab>
          <Tab label="Assignments" style={styles.tab} value="assignments" disableTouchRipple={true}>
          </Tab>
          <Tab label="Dots" style={styles.tab} value="dots" disableTouchRipple={true}>
          </Tab>
          <Tab label="Syllabus" style={styles.tab} value="syllabus" disableTouchRipple={true}>
          </Tab>
          <Tab label="Grades" style={styles.tab} value="grades" disableTouchRipple={true}>
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
            </Menu>
          </Popover>
        </span>}
      iconElementRight={
        <img alt="dotp-logo" src='dotp.PNG' width={33} height={33}/>
      }
      />

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



    <Modal
      open={this.state.demoModalOpen}
      style={styles.modal}
      onClose={this.handleDemoModalClose}>
    <Modal.Header>Welcome to the demo for DotPractica!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='dotp.PNG' />
      <Modal.Description>
        <Header>DotPractica streamlines the formative assessment and discussion
         process for high schools using state-of-the-art cloud technology and
         powerful data visualization tools</Header>
        <p>During this demo, you can engage the app as both a student and an educator
        participating in an introductory economics course.</p>
        <p>Activities as a student include participation in a discussion, completing
        a quiz, receving feedback from a teacher, and studying past assignments.</p>
        <p>As an educator, you will be able to review student participation in the
        discussion, provide feedback on assignments, review student performance on
        assignments, and gain insight on student comprehension.</p>
        <p>Learn more about our mission
        at <a target="_blank" rel="noopener noreferrer" href="http://dotpractica.com">dotpractica.com</a>
        </p>
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
