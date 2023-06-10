import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import NavBar from './Components/NavBar';

class App extends React.Component{
  state = {};
  render(){
    return(
      <>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/resume' element = {<Resume/>}/>
        </Routes>
      </>
    )
  }
}

export default App;
