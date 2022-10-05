import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from '../reducer/postSlice'

export function AddPostForm() {
    const [title,settitle] = useState("")
    const [content, setcontent] = useState("")
    const dispatch = useDispatch()

    const savePost = ()=>{
        if(title && content){
            dispatch(postAdded({
                id:nanoid(),
                title,
                content
            }))
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
                <button onClick={savePost} type="button">Save Post</button>
            </form>
        </section>
  )
}
