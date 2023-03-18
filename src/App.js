import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './component/New';

function App() {
  return (
    <div className="App">
      <BrowserRouter>\
      <Navbar/>
      <Routes>
        <Route path='/' element={<New/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
