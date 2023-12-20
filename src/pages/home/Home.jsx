import Topbar from '../../components/TopBar/Topbar'
import RightBar from '../../components/RightBar/RightBar'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/sidebar'
import './home.css'

const home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}

export default home