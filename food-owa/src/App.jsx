
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
    <div className="App">
      <Router>
      <Navbar />
      <Routes> 
            {/* Define your routes here */}
            {/* <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />  */}
            {/* Add more routes as needed */}
          </Routes>

      </Router>
    </div>
    </>
  )
}

export default App;