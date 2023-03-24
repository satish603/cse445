import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
// import Footer from './components/Footer';
import AddItem from './components/AddItem';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
        <div className="container">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/addItem" element={<AddItem/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
