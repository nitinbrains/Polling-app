import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing'

class App extends Component {
  state={
    data:[
      {  id:0,
         question:'Why is React so Popular?',
         answers:[
           { id:0, ans:'Virtual Dom' },
           { id:1, ans:'Efficient' },
           { id:2, ans:'I dont Know' },
           { id:3, ans:'None of these' }
         ],
         
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
  render() {
    console.log(this.state.data)
    return (
       <div className="container">
        {this.state.data.map((v,i)=>(
          <Landing index={i} elems={v} />
        ))}
      </div>
    );
  }
}

export default App;
