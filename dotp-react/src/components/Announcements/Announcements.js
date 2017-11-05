import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class Announcements extends Component { render() {

  return ( <div>

  <Card>
    <CardHeader
      title={<div>
        <h2>Announcements</h2>
        </div>}
    />
    <Divider/>
    <CardMedia>
      <CardText>No announcements yet</CardText>
    </CardMedia>
  </Card>

  </div> ); } } export default Announcements;
