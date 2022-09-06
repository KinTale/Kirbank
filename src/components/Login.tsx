import { Button } from "react-bootstrap"
import { useState } from 'react'

function Login() {
  const blankData = {
    username: "",
    password: ""
  }
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
    setUser(blankData)
  };

    return (
      <div className="d-flex flex-column justify-content-center align-items-center border p-3">
        <header className="text-bg-primary m-3">KirBank</header>
        <form className="d-flex flex-column justify-content-center align-items-center " onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name='username' value={user.username} onChange={handleChange} />
          <input className='mt-2' type="password" placeholder="Password" name='password' value={user.password} onChange={handleChange} />
          <Button className='mt-3' variant="light" type="submit">Login</Button>
        </form>
      </div>
    );
  }
  
  export default Login;