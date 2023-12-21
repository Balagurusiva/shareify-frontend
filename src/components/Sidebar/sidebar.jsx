import { Bookmark, Group, HelpOutline, RssFeed, WorkOutline,Event, School } from '@mui/icons-material'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <RssFeed className='sidebar-icon' />
                    <span className="sidebar-list-item-text">Feed</span>
                </li>
                <li className="sidebar-list-item">
                    <Group className='sidebar-icon' />
                    <span className="sidebar-list-item-text">Groups</span>
                </li>
                <li className="sidebar-list-item">
                    <Bookmark className='sidebar-icon' />
                    <span className="sidebar-list-item-text">Bookmark</span>
                </li>
                <li className="sidebar-list-item">
                    <HelpOutline className='sidebar-icon' />
                    <span className="sidebar-list-item-text">Quoestions</span>
                </li>
                <li className="sidebar-list-item">
                    <WorkOutline className='sidebar-icon' />
                    <span className="sidebar-list-item-text">Jobs</span>
                </li>
                <li className="sidebar-list-item">
                    <Event className='sidebar-icon' />
                    <span className="sidebar-list-item-text">Events</span>
                </li>
                <li className="sidebar-list-item">
                    <School className='sidebar-icon' />
                    <span className="sidebar-list-item-text">Courses</span>
                </li>
            </ul>
            <button className='sidebar-button'>show more</button>
            <hr  className='sidebar-hr'/>
            <ul className='sidebar-friend-list'>
                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
                                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
                                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
                                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
                                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
                                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
                                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
                                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
                                <li className="sidebar-friend">
                    <img src="public\assets\person\bala.jpg" alt="img" className="sidebar-friend-img" />
                    <span className="sidebar-friend-name">Bala</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar