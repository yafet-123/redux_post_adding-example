import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id:'1', 
        title:"First Post!", 
        content:"Hello", 
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        },
    },
    {
        id:'2', 
        title:"Second Post!", 
        content:"More text", 
        date: sub(new Date(), { minutes: 15 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        },
    }
]

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        date: new Date().toISOString(),
                        content,
                        userId:userId
                    }
                }
            },
        },
        reactionAdded(state, action) {
            
            const { postId, reaction } = action.payload
            console.log(reaction)
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },
        postUpdated:(state,action)=>{
            const {id, title, content} = action.payload
            const existingPost = state.find( post => post.id === id )
            if(existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const { postAdded, postUpdated, reactionAdded} = postSlice.actions

export default postSlice.reducer