import React, { Component } from 'react';

class Explanation extends Component {
	constructor(props){
		super(props);

		this.state = {
			explanations : [],
			currentIndex: 0,
		}

		this.addInput = this.addInput.bind(this);
	}
	
	addInput() {
		var newIndex = this.state.currentIndex + 1;
		var updatedExplanations = this.state.explanations;
		
		var newExplanation = {
			key: newIndex,
			el: <div key={newIndex}>
					<span>{newIndex+1}.</span>
					<input/>
				</div>,
		}
		updatedExplanations.push(newExplanation);
		
		this.setState({
			explanations: updatedExplanations,
			currentIndex: newIndex,
		});
	}
	
  render() {
    return (
      <div>
	  
        <p>Explanation:</p>
		<button type="button" onClick={this.addInput}>Add</button>
		<br/>
		<br/>
		
		<div key="0">
			<span>1.</span>
			<input/>
		</div>
		{
			this.state.explanations.map(function(e){
				return e.el
			})
		}
		
      </div>
    );
  }
}

export default Explanation;