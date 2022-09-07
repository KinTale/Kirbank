import { Button } from "react-bootstrap"
import { useState } from 'react'
import client from '../utils/client'
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const blankData = {
    username: "",
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
    client.post("/user", user)
    .then(res => {
        console.log(res)
        navigate('/login')
    })
    .catch(err => console.log(err))
  };

    return (
      <div className="d-flex flex-column justify-content-center align-items-center border p-3">
        <header className="m-2">
            <p className="fw-bold">KirBank</p>
            </header>
        <form className="d-flex flex-column justify-content-center align-items-center " onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name='username' value={user.username} onChange={handleChange} />
          <input className='mt-2' type="email" placeholder="Email" name='email' value={user.email} onChange={handleChange} />
          <input className='mt-2' type="password" placeholder="Password" name='password' value={user.password} onChange={handleChange} />
          <Button className='mt-3' variant="light" type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
  
  export default SignUp;