import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Edit from "./components/Edit";
import Contact from "./components/Contact";
import AddTransactions from "./components/AddTransactions";
import ViewTransactions from "./components/ViewTransactions";
import Home from "./components/Home";
import client from "./utils/client";

function App() {
  const [balance, setBalance] = useState(0)
  const [userInfo, setUserInfo] = useState({
    userId: 0,
    username: "tbc",
  });

  useEffect(() => {
    client.get('/balance')
      .then(res => {
        console.log({currentBalance: res.data.data.balance})
        setBalance(res.data.data.balance)})
  }, [userInfo])


  return (
    <div className='d-flex justify-content-center align-items-center full-height bg-secondary'>
      <Routes>
        <Route path='/' element={<Login setUserInfo={setUserInfo} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home userInfo={userInfo} balance={balance}/>} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add-transactions' element={<AddTransactions />} />
        <Route path='/view-transactions' element={<ViewTransactions balance={balance}/>} />
      </Routes>
    </div>
  );
}

export default App;
