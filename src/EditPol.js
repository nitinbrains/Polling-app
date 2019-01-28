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
        const myId=this.props.match.params.id;
        
          let new_quest=this.state.quest;
          let ans_0=this.state.ans0;
          let ans_1=this.state.ans1;
          let ans_2=this.state.ans2;
          let ans_3=this.state.ans3;

          const newData=
            {  id:myId,
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

    componentDidMount(){
        const myId=this.props.match.params.id;
        console.log('iiiiiiiiiiiiiiiiiii',myId)
        const filteredData=this.props.indPollData.filter(data=>data.id==myId)
        const questBack=filteredData.map((v,i)=>(v.question))
        const questMast=questBack[0]
        const ansBack=filteredData.map((v,i)=>(v.answers))
        const bolt=ansBack.map((v,i)=>(v[0]))
        const preansw0=bolt.map((v,i)=>(v.ans))
        const answ0=preansw0[0]
        
        const have2=ansBack.map((v,i)=>(v[1]))
        const have02=have2.map((v,i)=>(v.ans))
        const answ1=have02[0]

        const have3=ansBack.map((v,i)=>(v[2]))
        const have03=have3.map((v,i)=>(v.ans))
        const answ2=have03[0]

        const have4=ansBack.map((v,i)=>(v[3]))
        const have04=have4.map((v,i)=>(v.ans))
        const answ3=have04[0]
        
        
        
        console.log("hahahaha",questMast)
        this.setState({
            quest:questMast,
            ans0:answ0,
            ans1:answ1,
            ans2:answ2,
            ans3:answ3
        })
       

    }

    
  render() {
    console.log("hurrrrrrrrrrrrr",this.props.indPollData)
    console.log("stateNewpol",this.state.newPoll);
    // const {id}=this.props.match.params;
    // console.log('iiiiiiiiiiiiiiiiiii',id)
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
