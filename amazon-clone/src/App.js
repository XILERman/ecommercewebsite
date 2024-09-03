
import './App.css';
import Header from './Header';
import Kome from './Kome';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Router>
      
    <div className="App">
    <Routes>
      
    
    <Route path="/checkout" element={<><Header /><Checkout/></>}  />
    <Route path="/" element={<><Header /><Kome/></>}  />

    </Routes>
      
    </div>
    
    </Router>
  );
}

export default App;
