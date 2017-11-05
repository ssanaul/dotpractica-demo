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
    <ModuleUmbrella/>
    <NotesCard/>
    <Announcements/>

  </div> ); } } export default Home;
