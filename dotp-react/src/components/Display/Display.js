import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import { CardTitle, Paper } from 'material-ui';

import Notes from '../Notes/Notes';

class Display extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto', paddingBottom: 50}}>
        <div className="row">

      		<div className="col-md-6">
      			{this.props.quiz}
      		</div>

      		<div className="col-md-3">
      			<CardTitle
      				title='Previous Assessments'
              style={{textAlign:'center'}}
      			/>
      			<Paper>
      			{
      				this.props.quizzes.map(function(q){
      					return <ListItem
      						primaryText={q.props.title}
      						nestedItems={[
      							q.props.problems.map(function(p){
      								return <ListItem
      									primaryText={p.props.title}
      								/>
      							})
      						]}
      					/>
      				})
      			}
      			</Paper>
      		</div>

          <div className="col-md-3">
            <CardTitle
              title="Notes"
              style={{textAlign:'center'}}/>
            <Paper>
              <Notes/>
            </Paper>
          </div>

        </div>
      </div>
    );
  }
}
export default Display;
