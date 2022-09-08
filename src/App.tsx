import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import AddTransactions from './components/AddTransactions';
import ViewTransactions from './components/ViewTransactions'
import Home from './components/Home'

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center full-height bg-secondary">
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/" element={<Home />} />
  <Route path="/add-transactions" element={<AddTransactions />} />
  <Route path="/view-transactions" element={<ViewTransactions />} />
</Routes>
    </div>
  );
}

export default App;
