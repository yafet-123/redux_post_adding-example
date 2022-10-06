import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from '../reducer/postSlice'

export function AddPostForm() {
    const [title,settitle] = useState("")
    const [content, setcontent] = useState("")
    const [userId, setuserId] = useState("")

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    
    const savePost = ()=>{
        if(title && content){
            dispatch(postAdded(
                title,
                content,
                userId
            ))
        }
        settitle("")
        setcontent("")
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
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
                <label htmlFor="postAuthor">Post Content:</label>
                <select id="postAuthor" value={userId} onChange={(e) => setuserId(e.target.value)}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Post Content:</label>
                <input
                    type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={(e)=> setcontent(e.target.value)}
                />
                <button onClick={savePost} type="button" disabled={!canSave}>Save Post</button>
            </form>
        </section>
  )
}
