import React, { useEffect, useState } from 'react'
import './post.css'
import { Favorite, MoreVert, ThumbUp } from '@mui/icons-material'
import axios from 'axios'
import { Avatar } from '@mui/material'
import {format} from 'timeago.js'

const Post = ({ post }) => {

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({}) 

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:8080/api/user/${post.userId}`)
            // http://localhost:8080/api/user/6561a33ccb9484de565213ed
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId ])

    const likeHandler = () => {
        setLike(isLiked ? like -1 : like +1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left"> 
                        {user.profilePicture ? <img
                            className="profile-img"
                            src={user.profilePicture   }
                            alt="img"
                        /> : <Avatar />}
                         
                        <span className='post-data'>
                            <span className="post-user-name">{user.userName}</span>
                            <span className="post-date">{format(post.createdAt) }</span>
                        </span>

                    </div> 
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">hey my first post</span>
                    <img 
                       className='post-img' 
                       src={ import.meta.env.VITE_IMG_FOLDER + "person/bala.jpg"} 
                       alt="img"
                     />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <ThumbUp
                           className='like-icon' 
                           style={{ "color": "14a4ff" }}
                           onClick = {likeHandler}
                         />
                        <Favorite 
                           className='like-icon' 
                           style={{ "color": "red" }} 
                           onClick = {likeHandler}
                        />
                        <span className='post-like-count'>{like} people</span>
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