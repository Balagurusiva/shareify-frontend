import './rightbar.css'

const RightBar = () => {
  return (
     <div className="rightbar">
        <div className="rightbar-wrapper">
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
        </div>
     </div>
  )
}

export default RightBar