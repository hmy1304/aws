import React from 'react'
import { getTagColor } from '@/hooks/useTagColor'

const PostTag = ({ tag, onClick }) => {
  return (
    <span 
    className='post-tag'
    style={{backgroundColor:getTagColor(tag)}}
    >
      <span>

        {tag}
      </span>
      <button 
      onClick={(e)=>{
        e.preventDefault()
        e.stopPropagation()
        onClick?.()
      }}
      className='post-tag-delete'>X</button>
    </span>
  )
}

export default PostTag