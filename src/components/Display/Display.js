import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div style={{width: '100%'}}>
	  
		<div style={{width: '40%', display: 'inline-block'}}>
			{this.props.quiz}
		</div>
					
		<div style={{width: '30%', display: 'inline-block'}}>
			<h2>Previous Assessments</h2>
			<ul>
			{
				this.props.quizzes.map(function(q){
					return <details>
						<summary>{q.props.title}</summary>
						{
							q.props.problems.map(function(p){
								return <p>
									{p.props.title}
								</p>
							})
						}
					</details>
				})
			}
			</ul>
		</div>
					
		<div style={{width: '30%', display: 'inline-block'}}>
			<h2>Web</h2>
		</div>
		<br/>
		<hr/>
      </div>
    );
  }
}
export default Display;