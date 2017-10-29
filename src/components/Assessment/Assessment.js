import React, { Component } from 'react';

class Assessment extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
		<hr/>
		{
			this.props.problems.map(function(p){
				return p
			})
		}
      </div>
    );
  }
}
export default Assessment;