import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import AddTransactions from './components/AddTransactions';
import ViewTransactions from './components/ViewTransactions'
import Home from './components/Home'

function App() {
  
  const[userInfo, setUserInfo] = useState({
    userId: 0,
    username: "tbc"
  })
 
  return (
    <div className="d-flex justify-content-center align-items-center full-height bg-secondary">
<Routes>
  <Route path="/" element={<Login setUserInfo={setUserInfo} />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/home" element={<Home userInfo={userInfo} />} />
  <Route path="/add-transactions" element={<AddTransactions />} />
  <Route path="/view-transactions" element={<ViewTransactions />} />
</Routes>
    </div>
  );
}

export default App;
