import React from 'react';
import TestSketch from './Sketches/testSketch'

class App extends React.Component{
  state = {};
  render(){
    return(
      <div>
        <div>Hello</div>
        <TestSketch/>
      </div>
    )
  }
}

export default App;
