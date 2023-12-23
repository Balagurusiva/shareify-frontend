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

    const profilrRightbar = () => (<div>profile</div>)
    return (
        <div className="rightbar">
            <div className="rightbar-wrapper">
                {!profile ? HomeRightbar() : profilrRightbar()}
            </div>
        </div>
    )
}

export default RightBar