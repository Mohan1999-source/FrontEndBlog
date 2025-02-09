
import NavBar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Detailpage from './component/Detailpage/Detailpage';
import Footer from "./component/Footer/footer";
import "./app.css";



function App() {
  
  return (
    <Router>
    <div className="App">
        <NavBar />
        <div className="content">
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/:id" element={< Detailpage />} />
    </Routes>
    </div>
        <Footer />
      </div>
  </Router>
  )
}

export default App
