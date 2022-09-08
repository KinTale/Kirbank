import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

function ViewTransactions() {
    let navigate = useNavigate()
    return (
      <div className="d-flex flex-column justify-content-center align-items-center border p-3">
       This the view transactions page
       <Button className="btn-dark" onClick={() => navigate('/home')}>Back to Home</Button>
      </div>
    );
  }
  
  export default ViewTransactions;