import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Photo from './components/Photo.jsx'
import {BrowserRouter, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Menu/>
           <div className="wrapper">
             <Route exact path="/" render={() => 
              <Photo name="Детская одежда" />
            }/> 
             {/* <Route path='/forkids' component={Photo} />   */}
         </div> 
         <Photo name="Детская одежда" conditions="Тепло и кофортно" price="1000 Rub" /> 
          
      </BrowserRouter>

    </div>
  );
}

export default App;
