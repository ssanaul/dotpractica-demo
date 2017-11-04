import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Icon } from 'semantic-ui-react'
import Home from '../Home/Home';

class Demo extends Component {
  constructor(props){
    super(props);

    this.state = {
      demoModalOpen: true,
    }
  }
  handleDemoModalClose = () => this.setState({demoModalOpen: false});
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
  }
  return ( <div>
      <AppBar
      style={styles.navBar}
      title={
        <Tabs style={styles.tabs} inkBarStyle={styles.inkBar}>
          <Tab label="Home" style={styles.tab} disableTouchRipple={true}>
          </Tab>
          <Tab label="Assignments" style={styles.tab} disableTouchRipple={true}>
          </Tab>
          <Tab label="Dots" style={styles.tab} disableTouchRipple={true}>
          </Tab>
          <Tab label="Syllabus" style={styles.tab} disableTouchRipple={true}>
          </Tab>
          <Tab label="Grades" style={styles.tab} disableTouchRipple={true}>
          </Tab>
        </Tabs>
      }
      iconElementLeft={<span style={{marginRight: 20}}>
        <Icon name='content' size='big' style={{marginBottom: 15, marginRight: 15}}/>
        <h1 style={{display:'inline'}}>Microeconomics</h1>
      </span>}
      iconElementRight={
        <img alt="dotp-logo" src='dotp.PNG' width={33} height={33}/>
      }
      />
    <div>
      <Home/>
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
