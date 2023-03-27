import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
// import Footer from './components/Footer';
import AddItem from './components/AddItem';
import Alerts from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/cart';
import SearchState from './context/search/SearchState';
import {useState} from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
}
  return (
    <SearchState>
    <Router>
      <Navbar/>
        <Alerts alert={alert}/>
        <div className="container">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/api/product/addproduct" element={<AddItem showAlert={showAlert}/>}/>
        <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
        <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
    </div>
    </Router>
    </SearchState>
  );
}

export default App;
