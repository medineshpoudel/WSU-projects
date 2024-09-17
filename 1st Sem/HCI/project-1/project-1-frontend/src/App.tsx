import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Original from './pages/Original';
import Test from './pages/Test';


function App() {

  return (
    <BrowserRouter>
    <div className='h-screen w-screen'>
    <Routes>
        <Route path="/" element= { <Home/>} /> 
        <Route path="/original" element= { <Original/>} /> 
        <Route path="/test" element= { <Test/>} /> 
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
