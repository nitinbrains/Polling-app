import React, { Component } from 'react'
import './App.css';
import uuid from 'uuid'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

 class CreatePol extends Component {
     state={
         quest:'',
         ans0:'',
         ans1:'',
         ans2:'',
         ans3:'',
         newPoll:null
     }

     change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
      }
 
      submitForm=()=>{
          let new_quest=this.state.quest;
          let ans_0=this.state.ans0;
          let ans_1=this.state.ans1;
          let ans_2=this.state.ans2;
          let ans_3=this.state.ans3;

          const newData=
            {  id:uuid(),
                question:new_quest,
                answers:[
                  { id:uuid(), ans:ans_0 },
                  { id:uuid(), ans:ans_1},
                  { id:uuid(), ans:ans_2 },
                  { id:uuid(), ans:ans_3 }
                ]
                
             }
             this.setState({
               newPoll:newData
             },()=>{
               console.log("bbbbbbbbbbbbbbbbbbbbbbb",newData);
               this.props.handleSubmit(this.state.newPoll)
             })
          this.setState({
              quest:'',
              ans0:'',
              ans1:'',
              ans2:'',
              ans3:''
          })
      }
      handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleSubmit(this.state.newPoll)
      }

  render() {
    return (
      <div className="container">
         <Form>
         <FormGroup style={{marginBottom:'20px'}}>
          <Label for="exampleQuest">Question:</Label>
          <Input type="text" name="quest" value={this.state.quest} onChange={e=>this.change(e)} id="exampleQuest" placeholder="Enter Question" required/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAns0">A.)</Label>
          <Input className="wid" type="text" name="ans0" value={this.state.ans0} onChange={e=>this.change(e)}  id="exampleAns0"  required />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAns1">B.)</Label>
          <Input className="wid" type="text" name="ans1" value={this.state.ans1} onChange={e=>this.change(e)}  id="exampleAns1"  required />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAns2">C.)</Label>
          <Input className="wid" type="text" name="ans2" value={this.state.ans2} onChange={e=>this.change(e)}  id="exampleAns2"  required/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAns2">D.)</Label>
          <Input className="wid" type="text" name="ans3" value={this.state.ans3} onChange={e=>this.change(e)}  id="exampleAns3"  required />
        </FormGroup>
        <Button type="submit" onClick={this.submitForm}>Submit</Button>
        </Form>
      </div>
    )
  }
}
export default CreatePol;
