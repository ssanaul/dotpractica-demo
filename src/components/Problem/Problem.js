import React, { Component } from 'react';
import Solution from '../Solution/Solution';

class Problem extends Component {

  render() {
    return (
      <div>
	  
        <h2>{this.props.title}</h2>
		<Solution/>
		
      </div>
    );
  }
}
export default Problem;