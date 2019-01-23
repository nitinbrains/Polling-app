import React, { Component } from 'react'
import {Input,ListGroup,ListGroupItem,Button,Label} from 'reactstrap'

 class Landing extends Component {
     constructor(props) {
       super(props)
     }
    
  render() {
      const {elems}=this.props;

     
      
    return (
      <div>
        <h3><span style={{fontWeight:'bolder'}}>Question:</span> {elems.question}</h3>
        <h3><span style={{fontWeight:'bolder', color:'#b30000'}}>Options:</span></h3>
        {elems.answers.map((v,i)=>(
            // <p>{v.ans}</p>
            <ListGroup>
                <ListGroupItem>
                 {/* <Input style={{marginLeft:"-1rem"}} type="checkbox"></Input> {v.ans} */}
                 <Label check>
                <Input style={{marginLeft:"-1rem"}} type="radio" name="radio2" value={v.ans} />{' '}

                {v.ans}
                </Label>
                </ListGroupItem>
            </ListGroup>
        ))}
        <Button style={{marginTop:'20px',marginBottom:'20px'}}>Submit</Button>
      </div>
    )
  }
}
export default Landing;