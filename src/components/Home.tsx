import { UserInfo } from "../utils/interfaces"

interface StateProps {
  userInfo: UserInfo
}

function Home(props: StateProps) {
 const { userInfo } = props

    return (
      <div className="d-flex flex-column justify-content-center align-items-center border p-3">
       Hi {userInfo.username}
      </div>
    );
  }
  
  export default Home;