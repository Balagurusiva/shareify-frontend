import Topbar from '../../components/TopBar/Topbar' 
import SideBar from '../../components/RightBar/RightBar'
import RightBar from '../../components/RightBar/RightBar'
import Feed from '../../components/Feed/Feed'
import './home.css'

const home = () => {
  return (
     <>
     <Topbar />
     <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
     </div>
     </>
  )
}

export default home