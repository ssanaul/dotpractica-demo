import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {Radio, Form} from 'semantic-ui-react';

class Answer extends Component {
  constructor(props){
    super(props);

    this.state = {
        answers: [
          "the value of going out with friends OR watching a movie",
          "the additional benefits of studying for each class",
          "one of you washes all the dishes while the other does a different chore",
          "ceteris paribus",
        ],
        dots: [

        ]
    }
  }
  render() {
  var handleChange = (e, {value}) => this.setState({ value });
  var checkEquality = (p) => {
    //return this.state.value === p;
    return this.state.answers.includes(p) || p===this.props.answer;
  }

  return ( <div>
        {
          this.props.inputType==='radio'?
          <Form>
            <Form.Field>
            {
              this.props.options.map(function(p){
                return <div>
                        <Radio
                          value={p}
                          label={p}
                          checked={checkEquality(p)}
                          //onChange={handleChange}
                        />
                        </div>
              })
            }
            </Form.Field>
            </Form>
          :
          ''
        }

  </div> ); } } export default Answer;
