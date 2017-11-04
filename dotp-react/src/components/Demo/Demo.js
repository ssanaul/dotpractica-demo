import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Icon } from 'semantic-ui-react'

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
      height: 375,
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
          <Tab label="Assessments" style={styles.tab} disableTouchRipple={true}>
          </Tab>
          <Tab label="Connections" style={styles.tab} disableTouchRipple={true}>
          </Tab>
          <Tab label="Grades" style={styles.tab} disableTouchRipple={true}>
          </Tab>
        </Tabs>
      }
      iconElementLeft={<span style={{marginRight: 20}}>
        <Icon name='content' size='big' style={{marginBottom: 15, marginRight: 15}}/>
        <h1 style={{display:'inline'}}>Intro to Physics</h1>
      </span>}
      iconElementRight={
        <img alt="dotp-logo" src='dotp.PNG' width={33} height={33}/>
      }
      />
    <div>
      {this.props.displays[0]}
    </div>
    <Modal
      open={this.state.demoModalOpen}
      style={styles.modal}
      onClose={this.handleDemoModalClose}>
    <Modal.Header>Welcome to the demo for DotPractica!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='dotp.PNG' />
      <Modal.Description>
        <Header>DotPractica is an interactive education aid that streamlines the
        formative assessment process for high schools using powerful data
        visualization tools</Header>
        <p>For the demo, you will experience the app as a student as well as
        an educator.</p>
        <p>To begin, you will take a quiz meant for a high school student in the
        middle of an introductory physics class.</p>
        <p>Upon submitting the quiz, you will be able to review the quiz as if
        you were a teacher.</p>
        <p>You will also be able to review class-wide analytics produced by DotPractica.</p>
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
