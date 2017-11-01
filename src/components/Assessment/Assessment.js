import React, { Component } from 'react';
import { CardTitle, Paper } from 'material-ui';

class Assessment extends Component { render() {

  return ( <div>

        <CardTitle title={this.props.title} style={{textAlign: 'center'}} />
        
        <div>
          {
            this.props.problems.map(function(p){
              return <Paper
                      zDepth={1}
                      style={{padding: 20}}>
                        {p}
                    </Paper>
            })
          }
        </div>

      </div> ); } } export default Assessment;
