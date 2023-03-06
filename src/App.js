import { Home, Dashboard } from './routes';
import { Navbar } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar />  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
