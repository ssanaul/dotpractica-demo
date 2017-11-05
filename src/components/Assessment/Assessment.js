import React, { Component } from 'react';
import { Paper } from 'material-ui';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';

class Assessment extends Component {
  constructor(props){
    super(props);
  }
  render() {
  const styles = {
    quizbar : {
      marginTop: 5,
      backgroundColor: 'rgba(0, 10, 20, .8)',
      textAlign: 'center'
    },
    toolbarText : {
      textAlign: 'center',
    },
    toolbarTextWrapper : {
      width: '100%',
      margin: 'auto',
    },
    problemWrapper : {
      padding: 20,
      marginBottom: 10
    },
  }
  return ( <div>

        <AppBar
          title={this.props.title}
          iconElementLeft={<div></div>}
          style={styles.quizbar}
        />
        <div>
          {
            this.props.problems.map(function(p){
              return <Paper
                      zDepth={1}
                      style={styles.problemWrapper}>
                        {p}
                    </Paper>
            })
          }
        </div>

      </div> ); } } export default Assessment;
