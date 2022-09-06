import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center full-height">
<Routes>
  <Route path="/" element={<Login />} />
</Routes>
    </div>
  );
}

export default App;
