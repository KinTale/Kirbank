import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

function Edit() {
 
    let navigate = useNavigate()
    return (
      <div className="d-flex flex-column justify-content-center align-items-center border p-3">
       This the Edit Details page
       <Button onClick={() => navigate('/home')}>Back to Home</Button>
      </div>
    );
  }
  
  export default Edit;