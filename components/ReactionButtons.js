import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from '../reducer/postSlice'

export function ReactionButtons({post}) {
    const reactionEmoji = [
        { name:'thumbsUp', image:'👍' },
        { name:'hooray', image:'🎉'},
        { name:'heart', image:'❤️'},
        { name:'rocket', image:'🚀'},
        { name:'eyes', image:'👀'}
    ]
    const dispatch = useDispatch()
    return (
        <>
            {reactionEmoji.map((emoji,index)=>(
                <button
                    key={index}
                    type="button"
                    className="muted-button reaction-button"
                    onClick={() =>
                        dispatch(reactionAdded({ postId: post.id, reaction: emoji.name }))
                    }
                >
                    {emoji.image}
                </button>
            ))}   
        </> 
    )
}
