import React from 'react'
import Post from '../post/Post'
import "./posts.css"
export default function Posts() {
    return (
        <div className='posts'>
            <Post/>                 {/*calling post component */}
            <Post/> 
            <Post/> 
            <Post/> 
            <Post/> 
            <Post/> 
        </div>
    )
}
