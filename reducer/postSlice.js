import { createSlice, CreateSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:'1', title:"First Post!", content:"Hello"},
    {id:'2', title:"Second Post!", content:"More text"}
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

export const { postAdded, postUpdated} = postSlice.actions

export default postSlice.reducer