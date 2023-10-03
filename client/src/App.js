import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Rides from './Pages/Rides/Rides';
import Testimonials from './Pages/Testimonials/Testimonials';
import Register from './Pages/Register/Register';
import Login from "./Pages/Login/Login.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';


function App() {
  const {user} = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/register' element={!user ? <Register/> : <Navigate replace to="/"/>}/>
        <Route path='/login' element={!user ? <Login/>: <Navigate replace to="/"/>}/>
        <Route path='/' element={ user ? (
          <>
            <Navbar/>
            <Home/>
            <About/>
            <Rides/>
            <Testimonials/>
            <Contact/>
          </>
        ):<Navigate replace to="/register"/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
