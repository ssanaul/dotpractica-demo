import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { Paper } from 'material-ui';

import AssignmentView from '../AssignmentView/AssignmentView';
import NotesCard from '../NotesCard/NotesCard';
import Announcements from '../Announcements/Announcements';
import ModuleUmbrella from '../ModuleUmbrella/ModuleUmbrella';

class Home extends Component { render() {

  return ( <div>
    <div style={{marginBottom: 10}}>
      <ModuleUmbrella />
    </div>
    <div style={{marginBottom: 10}}>
      <NotesCard/>
    </div>
    <div>
      <Announcements/>
    </div>

  </div> ); } } export default Home;
