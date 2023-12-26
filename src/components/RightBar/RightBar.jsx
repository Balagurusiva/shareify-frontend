import './rightbar.css'

const RightBar = ({ profile }) => {

    const HomeRightbar = () => (
        <>
            <h3 className="rightbar-title">Online Friends  </h3>
            <ul className="rightbar-friend-list">
                <li className="rightbar-friend">
                    <div className="rightbar-profile-img-container">
                        <img src="public\assets\person\bala.jpg" alt="" className="rightbar-img" />
                        <span className="rightbar-online"></span>
                    </div>
                    <span className="rightbar-user-name">Bala</span>
                </li>
                <li className="rightbar-friend">
                    <div className="rightbar-profile-img-container">
                        <img src="public\assets\person\bala.jpg" alt="" className="rightbar-img" />
                        <span className="rightbar-online"></span>
                    </div>
                    <span className="rightbar-user-name">Bala</span>
                </li>

            </ul>
        </>
    )

    const profilrRightbar = () => (
        <>
            <h4 className="rightbar-title">User Information</h4>
            <div className="rightbar-info">
                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">City:</span>
                    <span className="rightbar-info-value">Chennai</span>
                </div>
                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">From:</span>
                    <span className="rightbar-info-value">TVM</span>
                </div>
                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">Relationship:</span>
                    <span className="rightbar-info-value">Single</span>
                </div>
            </div>

            <h4 className="rightbar-title">User Friends</h4>
            <div className="rightbar-followings">
                <div className="rightbar-following">
                    <img src="public\assets\person\bala.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-user-name">Bala</span>
                </div>
                <div className="rightbar-following">
                    <img src="public\assets\person\bala.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-user-name">Bala</span>
                </div>
                <div className="rightbar-following">
                    <img src="public\assets\person\bala.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-user-name">Bala</span>
                </div>
                <div className="rightbar-following">
                    <img src="public\assets\person\bala.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-user-name">Bala</span>
                </div>
                <div className="rightbar-following">
                    <img src="public\assets\person\bala.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-user-name">Bala</span>
                </div>

            </div>
        </>
    )
    return (
        <div className="rightbar">
            <div className="rightbar-wrapper">
                {!profile ? HomeRightbar() : profilrRightbar()}
            </div>
        </div>
    )
}

export default RightBar