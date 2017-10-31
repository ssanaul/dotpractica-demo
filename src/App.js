import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Assessment from './components/Assessment/Assessment';
import Problem from './components/Problem/Problem';
import Display from './components/Display/Display';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			quizzes: [
				<Assessment
					key='0'
					title='Key Ideas of Economics'
					problems={[
						<Problem key='a'
						title='Why do students usually benefit from studying in groups?'
						inputType='checkbox'
						options={[
							'some students are smarter than others',
							'students have different skills',
							'only poor students benefit'
						]}
					/>,
						<Problem key='b' title='What is demand?'/>,
					]}
				/>,<Assessment
					key='1'
					title='Economic Models and Production Possibilities'
					problems={[
						<Problem key='a' title='Problem 1a'/>,
						<Problem key='b' title='Problem 1b'/>,
					]}
				/>,<Assessment
					key='2'
					title='Trade and Comparative Advantage'
					problems={[
						<Problem key='a' title='Problem 1a'/>,
						<Problem key='b' title='Problem 1b'/>,
					]}
				/>,<Assessment
					key='3'
					title='Basics of Supply and Demand'
					problems={[
						<Problem key='a' title='Problem 1a'/>,
						<Problem key='b' title='Problem 1b'/>,
					]}
				/>,<Assessment
					key='4'
					title='Demand'
					problems={[
						<Problem key='a' title='Problem 1a'/>,
						<Problem key='b' title='Problem 1b'/>,
					]}
				/>,<Assessment
					key='5'
					title='Supply'
					problems={[
						<Problem key='a' title='Problem 1a'/>,
						<Problem key='b' title='Problem 1b'/>,
					]}
				/>,<Assessment
					key='6'
					title='Market Equilibrium'
					problems={[
						<Problem key='a' title='Problem 1a'/>,
						<Problem key='b' title='Problem 1b'/>,
					]}
				/>,<Assessment
					key='7'
					title='Price Ceilings and Price Floors'
					problems={[
						<Problem key='a' title='Problem 1a'/>,
						<Problem key='b' title='Problem 1b'/>,
					]}
				/>,<Assessment
					key='8'
					title='Elasticity of Demand'
					problems={[
						<Problem key='a' title='Problem 1a'/>,
						<Problem key='b' title='Problem 1b'/>,
					]}
				/>,
			],
		}
	}

  render() {
	var displays = null;
	var allQuizzes = this.state.quizzes;
	var generatedDisplays = this.state.quizzes.map(function(q){
		var display = <Display quiz={q} quizzes={allQuizzes}/>
		return display
	})
	displays = generatedDisplays;
    return (
      <MuiThemeProvider>
			<AppBar title="ECON 102: Principles of Microeconomics"/>
			{displays[0]}
      </MuiThemeProvider>
    );
  }
}

export default App;

/*
	Models:
	Assessment ==> A
	Problem ==> P
	Answer ==> N
	Explanation ==> X
	Solution ==> S

	Relations:
	A --1tm--> P
		P --1t1--> N
			N --1tm--> X
			N --1t1--> S

	Web:
	A[m]-->A[k]
	A[m].P[m]-->A[k].P[k]

	Access:
	X[m]-->A[k]-->A[k].S[k].*

*/
