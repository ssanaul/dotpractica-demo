import React, { Component } from 'react';
import { Paper } from 'material-ui';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';

class Assessment extends Component { render() {
  const styles = {
    quizbar : {
      marginTop: 20,
      backgroundColor: 'rgba(10, 20, 20, .7)',
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
