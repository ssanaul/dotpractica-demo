import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Paper } from 'material-ui';

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
			<h4>Explain:</h4>
				<Paper>
				<div className="row">
					<div className="col-sm-9" style={{paddingRight: 0}}>
						<textarea style={{
							width: '100%',
							maxWidth: '100%',
							minWidth: '100%',
							height: 100,
							border: 'none',
							borderRight: '2px solid rgba(200,200,200,.5)',
							outline: 'none',
							overflow: 'auto',
						}}>
						</textarea>
					</div>
					<div className="col-sm-3" style={{paddingLeft: 3}}>
						<span>Nodes used:</span>
						</div>
				</div>
				</Paper>
      </div>
    );
  }
}

export default Explanation;
