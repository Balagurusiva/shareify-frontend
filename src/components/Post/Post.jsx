import React, { useEffect, useState } from 'react'
import './post.css'
import { Favorite, MoreVert, ThumbUp } from '@mui/icons-material'
import axios from 'axios'

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:8080/api/user/${post.userId}`)
            // http://localhost:8080/api/user/6561a33ccb9484de565213ed
            setUser(res.data)
        }
        fetchUser()
    }, [])
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img
                            className="profile-img"
                            src={user.profilePicture}
                            alt="img"
                        />
                        <span className='post-data'>
                            <span className="post-user-name">{user.userName}</span>
                            <span className="post-date">{ }</span>
                        </span>

                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">hey my first post</span>
                    <img className='post-img' src="public\assets\person\bala.jpg" alt="img" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <ThumbUp className='like-icon' style={{ "color": "14a4ff" }} />
                        <Favorite className='like-icon' style={{ "color": "red" }} />
                        <span className='post-like-count'>32 people</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">9 comments</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post