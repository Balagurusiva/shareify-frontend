import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'

const Post = () => {
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="profile-img" src="public\assets\person\bala.jpg" alt="img" />
                        <span className='post-data'>
                            <span className="post-user-name">Balaguru siva</span>
                            <span className="post-date">2 day ago</span>
                        </span>

                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center"></div>
                <div className="post-bottom"></div>
            </div>
        </div>

    )
}

export default Post