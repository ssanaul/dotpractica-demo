import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Answer extends Component { render() {

  return ( <div>

        {
          this.props.inputType==='checkbox'?
          <RadioButtonGroup>
          <RadioButton/>
          <RadioButton/>
          <RadioButton/>
          <RadioButton/>
          </RadioButtonGroup>
          :
          <TextField/>
        }

  </div> ); } } export default Answer;
