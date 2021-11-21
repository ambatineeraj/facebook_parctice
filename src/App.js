import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Dashboard from './Dashboard';
import {BrowserRouter, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
           
           <Navbar/>
           
            
            <Routes path='/dahsboard' component={Dashboard} exact />
         <Body/>

           
           </BrowserRouter>
        
    </div>
  );
}

export default App;
