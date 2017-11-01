import React, { Component } from 'react';
import { Paper } from 'material-ui';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';

class Assessment extends Component { render() {
  const styles = {
    toolbar : {
      marginTop: 20,
      backgroundColor: 'rgba(200,200,200,.25)',
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

        <Toolbar style={styles.toolbar}>
            <ToolbarTitle text={
              <p style={styles.toolbarText}>{this.props.title}</p>
            }
            style={styles.toolbarTextWrapper}/>
        </Toolbar>

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
