import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

export default function SinglePostPage() {
    const router = useRouter()
    const { postId } = router.query
    console.log(postId)
    const post = useSelector(state => state.posts.find(post => post.id === postId))
    if(!post){
        return(
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }
    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
            </article>
        </section>
    )
}
