import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">


        <Router>
        <Navbar />
        <div className="App-body">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills/' element={<Skills />} />
            <Route path='/work/' element={<Work />} />
            <Route path='/contact/' element={<Contact />} />
          </Routes>
        </div>
        </Router>

    </div>
  );
}

export default App;