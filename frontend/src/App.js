
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Sign/Login';
import Reg from './components/Sign/reg';
import Home from './components/Home/Home';
import ShowNote from './components/ShowNote/ShowNote';
import { useSelector } from 'react-redux';

function App() {

  //getting the id of a logged in user from a redux state
  const id = useSelector(state => state.user.curruser && state.user.curruser.id)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Reg />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/note/:id" element={<ShowNote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
