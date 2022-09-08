import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

function Contact() {
    let navigate = useNavigate()
    return (
      <div className="d-flex flex-column justify-content-center align-items-center border p-3">
        <h3>Contact Us</h3>
        <div>
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
            <p className="fw-bold">Address:</p>
            <p>90 Narnia Lane</p>
            <p>Fakeland</p>
            <p>A1 2BC</p>
        </div>
        <div>
        <p><span className="fw-bold">Phone: </span>01234 567 890</p>
        <p><span className="fw-bold">Email: </span> dontcontactus@email.com</p>
        </div>
        </div>
       <Button className='m-2 btn-dark' onClick={() => navigate('/home')}>Back to Home</Button>
      </div>
    );
  }
  
  export default Contact;