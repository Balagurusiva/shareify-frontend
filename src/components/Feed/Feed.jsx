import Share from '../Share/Share'
import Post from '../Post/Post'
import './feed.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {
    const [post,setPost] =useState([])

    useEffect( () => {
        const fetchPost = async () => {
            const res = await axios.get('http://localhost:8080/api/posts/timeline/6569cb0b522619ca44f1eace')
            setPost(res.data)
        }
         fetchPost()
    },[])
  return (
    <div className='feed'>
        <div className="feed-wrapper">
            <Share />
             {
                post.map(p => (
                    <Post key={p.id} post={p} />
                ))
             }
             
        </div>
    </div>
  )
}

export default Feed