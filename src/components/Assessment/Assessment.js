import React, { Component } from 'react';

class Assessment extends Component {
  render() {
    return (
      <div>
	  
        <h1>{this.props.title}</h1>
		
		<div>
			{
				this.props.problems.map(function(p){
					return p
				})
			}
		</div>
		
      </div>
    );
  }
}
export default Assessment;