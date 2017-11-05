import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import { CardTitle, Paper } from 'material-ui';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {Icon} from 'semantic-ui-react';

import Notes from '../Notes/Notes';

class Display extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto', paddingBottom: 50}}>
        <div className="row">

      		<div className="col-md-7">
      			{this.props.quiz}
      		</div>

          {/*<Toolbar style={styles.toolbar}>
              <ToolbarTitle text={
                <p style={styles.toolbarText}>{this.props.title}</p>
              }
              style={styles.toolbarTextWrapper}/>
          </Toolbar>*/}

      		<div className="col-md-5">
            <Toolbar style={{marginTop: 5, backgroundColor: 'rgba(20, 70, 100, 1)', color: 'white', border: 'thin solid rgba(0,0,0,.1)'}}>
              <ToolbarTitle text={<span><Icon name='share alternate' size="small" circular/>Dots</span>} style={{width: '100%', margin: 'auto',
              textAlign: 'center', fontSize: '24px'}}/>
            </Toolbar>
      			{/*
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
      			*/}
      		</div>

          {/*<Notes/>*/}

        </div>
      </div>
    );
  }
}
export default Display;
