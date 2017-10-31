import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
					<TextField/>
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
		<RaisedButton onClick={this.addInput}>Add</RaisedButton>
		<br/>
		<br/>

		<div key="0">
			<span>1.</span>
			<TextField/>
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
