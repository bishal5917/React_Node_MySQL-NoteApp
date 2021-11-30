
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Sign/Login';
import Reg from './components/Sign/reg';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
