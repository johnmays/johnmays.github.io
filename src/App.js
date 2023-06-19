import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import DesignPortfolio from './Pages/DesignPortfolio';
import Profiles from './Pages/Profiles';
import CenteredNavBar from './Components/CenteredNavBar';

class App extends React.Component{
  state = {};
  render(){
    return(
      <div className='app'>
        <CenteredNavBar/>
        <div className='page-content'>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/resume' element = {<Resume/>}/>
          <Route path='/designportfolio' element = {<DesignPortfolio/>}/>
          <Route path='/profiles' element = {<Profiles/>}/>
        </Routes>
        </div>
      </div>
    )
  }
}

export default App;
