import { UserInfo } from "../utils/interfaces"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

interface StateProps {
  userInfo : UserInfo;
}

const homeStyle = {
  width: "300px",
  height: "100px"
}

function Home(props: StateProps) {
 
  const { userInfo } = props
  
  let navigate = useNavigate()
    
  return (
      <div>
        <h1 className='mb-4'>Hi {userInfo.username}</h1>
      <div className="d-flex flex-column justify-content-center align-items-center border p-3 mb-4">
       <h3>Current Balance: -£300:00</h3>
      </div>
      <div className='container text-center'>
        <div className="row">
        <Button className='col m-1 btn-dark' style={homeStyle} onClick={() => navigate('/view-transactions')}>View Transactions</Button>
        <Button className='col m-1 btn-dark' onClick={() => navigate('/add-transactions')}>Add Transactions</Button>
        </div>
        <div className="row">
        <Button className='col m-1 btn-dark' style={homeStyle} onClick={() => navigate('/edit')}>Edit Details</Button>
        <Button className='col m-1 btn-dark' onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </div>
      </div>
    );
  }
  
  export default Home;