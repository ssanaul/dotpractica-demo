import React, { Component } from 'react';
import { Card, CardTitle, Paper } from 'material-ui';

class Assessment extends Component {
  render() {
    return (
      <Card
		style={{padding: 20, height: 700}}
	  >
	  
        <CardTitle
			title={this.props.title}
			style={{width: 100, margin: 'auto'}}
		/>
		
		<div>
			{
				this.props.problems.map(function(p){
					return <Paper
						zDepth={1}
						style={{padding: 10, width: '50%', margin: 'auto'}}>
						{p}
					</Paper>
				})
			}
		</div>
		
      </Card>
    );
  }
}
export default Assessment;