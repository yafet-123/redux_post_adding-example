import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postUpdated } from '../reducer/postSlice'
import { useRouter } from 'next/router'

export default function EditPostForm() {
   
    const dispatch = useDispatch()
    const router = useRouter()
    const { postId } = router.query

    const post = useSelector(state => state.posts.find(post => post.id === postId))
    const [title,settitle] = useState(post.title)
    const [content, setcontent] = useState(post.content)
    const updatedPost = ()=>{
        if(title && content){
            dispatch(postUpdated({
                id: postId,
                title,
                content
            }))
            router.push({
                pathname: '/SinglePostPage',
                query: { postId: post.id }
            })
        }
        settitle("")
        setcontent("")
    }
    return (
        <section>
            <h2>Add New Posts</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e)=> settitle(e.target.value)}
                />
                <label htmlFor="postContent">Post Content:</label>
                <input
                    type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={(e)=> setcontent(e.target.value)}
                />
                <button onClick={updatedPost} type="button">Save Post</button>
            </form>
        </section>
  )
}
