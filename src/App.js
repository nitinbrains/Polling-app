import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import './App.css';
import Landing from './Landing'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import CreatePol from './CreatePol';
import Home from './Home';
import Notfound from './Notfound';

class App extends Component {
  state={
    pollData:[
      {  id:0,
         question:'Why is React so Popular?',
         answers:[
           { id:0, ans:'Virtual Dom' },
           { id:1, ans:'Efficient' },
           { id:2, ans:'I dont Know' },
           { id:3, ans:'None of these' }
         ]
         
      },
      {  id:1,
        question:'Who is Arvind Kejriwal?',
        answers:[
          { id:0, ans:'Poor Guy' },
          { id:1, ans:'Great Soul' },
          { id:2, ans:'President of Belgium' },
          { id:3, ans:'ceo google' }
        ]
     },
     {  id:2,
      question:'DOM stands for?',
      answers:[
        { id:0, ans:'Data Object Master' },
        { id:1, ans:'Document Object Manipulation' },
        { id:2, ans:'Destroy object master' },
        { id:3, ans:'None of these' }
      ]
   },
   {  id:3,
    question:'Where is Melbourne?',
    answers:[
      { id:0, ans:'In Nepal' },
      { id:1, ans:'In Australia' },
      { id:2, ans:'In South Korea' },
      { id:3, ans:'Nowhere in the world' }
    ]
  }
    ]
  }

  handleSubmit = (data) => {
    console.log("doubt",data)
    this.setState({
        pollData: [...this.state.pollData, data]
        
    })
    
}
  render() {
    console.log("Polldata",this.state.pollData)
    return (
       <div className="container">
       <Link style={{marginRight:"10px"}} to="/create"><Button color="info" size="lg" block>Create Poll</Button></Link>
       <Link style={{marginRight:"10px"}} to="/landing"><Button color="info" size="lg" block>Show Polls</Button></Link>
          <Router>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/landing' render={()=><Landing pollData={this.state.pollData}/>}/>
          <Route exact path='/create'  render={() => <CreatePol handleSubmit={(data) => this.handleSubmit(data)}/>}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;

 