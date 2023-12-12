import { Search, Person, Chat, Notifications, } from "@mui/icons-material"

const Topbar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-left">Shareify</div>
            <div className="topbar-center">
                <div className="searchbar">
                    <Search />
                    <input type="text" placeholder="Search for friends, posts or video" className="searchbar-input" />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbars=link">Home</span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icon">
                    <div className="topbar-icon-item">
                        <Person />
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
                <img src="public\assets\person\bala.jpg" alt="" className="topbar-img" />
            </div>
        </div>
    )
}

export default Topbar