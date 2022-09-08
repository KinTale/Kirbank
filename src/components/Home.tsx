import { UserInfo } from "../utils/interfaces"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

interface StateProps {
  userInfo : UserInfo;
}

function Home(props: StateProps) {
 
  const { userInfo } = props
  
  let navigate = useNavigate()
    
  return (
      <div>
        <h1>Hi {userInfo.username}</h1>
      <div className="d-flex flex-column justify-content-center align-items-center border p-3">
       Current Balance: -£300:00
      </div>
      <div >
        <Button onClick={() => navigate('/view-transactions')}>View Transactions</Button>
        <Button onClick={() => navigate('/add-transactions')}>Add Transactions</Button>
        <Button onClick={() => navigate('/edit')}>Edit Details</Button>
        <Button onClick={() => navigate('/contact')}>Contact Us</Button>
      </div>
      </div>
    );
  }
  
  export default Home;