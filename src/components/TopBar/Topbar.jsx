import { Search, Person, Chat, Notifications, } from "@mui/icons-material"
import './topbar.css'

const Topbar = () => {
    return (
        <div className=" topbar-container  ">
            <div className="topbar-left">
                <span className=" logo  ">Shareify</span></div>
            <div className="topbar-center">
                <div className="searchbar">
                    <Search className="search-icon"/>
                    <input type="text" placeholder="Search for friends, posts or video" className="searchbar-input" />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links ">
                    <div className="topbar-link">Home</div>
                    <div className="topbar-link">Timeline</div>
                </div>
                <div className="topbar-icon ">
                    <div className="topbar-icon-item">
                        <Person  />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Chat />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Notifications />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                </div>
                <img src="public\assets\person\bala.jpg" alt="profile img" className="topbar-img" />
            </div>
        </div>
    )
}

export default Topbar