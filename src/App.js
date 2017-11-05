import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Assessment from './components/Assessment/Assessment';
import Problem from './components/Problem/Problem';
import Display from './components/Display/Display';
import Demo from './components/Demo/Demo';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			users: [],
			quizzes: [
				<Assessment
					key='0'
					completed={true}
					value={0}
					title='Key Ideas of Economics'
					problems={[
						<Problem key='a'
						completed={true}
						title='Why do students usually benefit from studying in groups?'
						inputType='umbrella'
					/>,
						<Problem key='b'
						completed={true}
						title="You have three options on how to spend your Saturday afternoon: go out with friends, watch a movie, or wash your car. Your opportunity cost of washing your car would be:"
						inputType='radio'
						options={[
							'the value of going out with friends',
							'the value of watching a movie',
							'the value of going out with friends AND watching a movie',
							'the value of going out with friends OR watching a movie'
						]}
						/>,
						<Problem key='c'
						completed={true}
						title="Suppose you have a choice between studying one more hour for your history exam or studying one more hour for your psychology exam. Your decision on what to study should be based on:"
						inputType='radio'
						options={[
							'the additional benefits of studying for each class',
							'which class you like the most',
							'how much time you have already studied for each class',
							'your current average scores in each class'
						]}
						/>,
						<Problem key='d'
						completed={true}
						title="Suppose you and your roommate have the following agreement when it comes to cleaning your apartment: each person washes her or his own dishes after each meal. The principle of trade tells you that it would be more efficient if:"
						inputType='radio'
						options={[
							'both of you wash your own dishes after each meal',
							'neither of you washes the dishes after eating',
							'each of you washes half of all the dirty dishes',
							'one of you washes all the dishes while the other does a different chore'
						]}
						/>,
					]}
				/>,
				<Assessment
					key='1'
					completed={true}
					value={1}
					title='Supply and Demand'
					problems={[
						<Problem key='a'
						completed={true}
						title='Why did the number of American farmers decline since 1950?'
						inputType='umbrella'
					/>,
						<Problem key='b'
						completed={true}
						title="When there is a shortage of a good, we expect the price will:"
						inputType='radio'
						options={[
							'increase',
							'decrease',
							'stagnate'
						]}
						answer='increase'
						/>,
						<Problem key='c'
						completed={true}
						title="When there is a surplus of a good, we expect the price will:"
						inputType='radio'
						options={[
							'increase',
							'decrease',
							'stagnate'
						]}
						answer='decrease'
						/>,
						<Problem key='d'
						completed={true}
						title="What term do economists use to mean 'all other factors are unchanged'?"
						inputType='radio'
						options={[
							'carpe diem',
							'ceteris paribus',
							'lorem ipsum'
						]}
						/>,
					]}
				/>,
				<Assessment
					key='2'
					completed={false}
					value={2}
					title="Market Equilibrium"
					problems={[
						<Problem key='a'
						completed={false}
						title="If the equilibrium price of solar panels is $200 per panel, but a price ceiling of $150 per panel is imposed, what happens to the market for solar panels?"
						inputType="radio"
						options={[
							"quantity demanded exceeds quantity supplied and a surplus occurs",
							"quantity demanded exceeds quantity supplied and a shortage occurs",
							"quantity supplied exceeds quantity demanded and a surplus occurs",
							"quantity supplied exceeds quantity demanded and a shortage occurs",
						]}
						/>,
					]}
					/>,
			],
		}
	}
  render() {
	const styles = {
		container: {
			width: '90%',
			margin: 'auto',
		},
	}
	var displays = null;
	var allQuizzes = this.state.quizzes;
	var generatedDisplays = this.state.quizzes.map(function(q){
		var display = <Display quiz={q} quizzes={allQuizzes}/>
		return display
	})
	displays = generatedDisplays;
    return (
			<div style={styles.container}>
				<MuiThemeProvider>
					<Demo displays={displays} quizzes={this.state.quizzes}/>
	      </MuiThemeProvider>
			</div>
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
