import { Button } from "react-bootstrap"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import client from '../utils/client'
import storage from '../utils/storage'

function Login() {
  const blankData = {
    email: "",
    password: ""
  }

  let navigate = useNavigate();

  const [user, setUser] = useState(blankData);

  const handleChange = (e : React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let target = e.target as HTMLInputElement
    const { value, name } = target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e : React.FormEvent<EventTarget>) => {
    e.preventDefault();
    client.post('/login', user)
    .then(res => {
      console.log(res)
      storage.saveStorage(res.data.token)
      navigate('/')
    })   
  };

    return (
      <div className="d-flex flex-column justify-content-center align-items-center border p-3">
        <header className="text-bg-primary m-3">KirBank</header>
        <form className="d-flex flex-column justify-content-center align-items-center " onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name='email' value={user.email} onChange={handleChange} />
          <input className='mt-2' type="password" placeholder="Password" name='password' value={user.password} onChange={handleChange} />
          <Button className='mt-3' variant="light" type="submit">Login</Button>
        </form>
      </div>
    );
  }
  
  export default Login;