import React from 'react'
import Post from '../post/Post'
// import "./posts.css"
const Posts = () => {
  return (
    <div className='posts grid grid-cols-2 place-items-center'>
      <Post  />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts
