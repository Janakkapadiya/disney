import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login'



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/login" exact element={<Login />}></Route>
          <Route  path="/detail/:id" exact element={<Detail />}></Route>
           <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
