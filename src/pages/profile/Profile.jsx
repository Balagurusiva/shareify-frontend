import './profile.css'
import Topbar from '../../components/TopBar/Topbar'
import RightBar from '../../components/RightBar/RightBar'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/sidebar'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">

                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img src="public\assets\person\bala.jpg" alt="" className="profile-cover-img" />
                            <img src="public\assets\person\bala.jpg" alt="" className="profile-user-img" />
                        </div>
                        <div className="profile-info">
                            <h4 className='profile-info-name'>Balaguru S</h4>
                            <span className="profile-info-desc">Helllo prnds</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile