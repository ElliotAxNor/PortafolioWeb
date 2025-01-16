import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="content-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/pageNotFound" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
