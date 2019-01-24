import React, { Component } from 'react'
import {Input,ListGroup,ListGroupItem,Button,Label} from 'reactstrap'

 class Landing extends Component {
     constructor(props) {
       super(props)
     } 
  render() {
    return (
      <div>
        {this.props.pollData.map((v,i)=>(
          <div>
          <h3><span style={{fontWeight:'bolder'}}>Question:</span> {v.question}</h3>
          <h3><span style={{fontWeight:'bolder', color:'#b30000'}}>Options:</span></h3>
          {v.answers.map((v,i)=>(
             <ListGroup>
                       <ListGroupItem>
                         <Label check>
                     <Input style={{marginLeft:"-1rem"}} type="radio" name="radio2" value={v.ans}  />{' '}
                       {v.ans}
                       </Label>
                        </ListGroupItem>
                    </ListGroup>
          ))}
          <Button style={{marginTop:'20px',marginBottom:'20px'}}>Submit</Button>
        </div>))}
      </div>
    )
  }
}
export default Landing;