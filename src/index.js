import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component{
  constructor(props){ // provides state with initial data from props
    super(props); // gives props access to parent class
    this.state={date: new Date()};
  }
  
  componentDidMount(){ // starts timer after component is rendered in DOM
    this.timerID=setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){ // tears down timer, frees unused resources
    clearInterval(this.timerID);
  }

  tick(){
    this.setState((previousState, props) => {
      return {date: new Date()};
    });
  }

  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}


ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
);