import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
export function PostList() {
    const posts = useSelector((state)=> state.posts)
    
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {posts.map((post,index)=>(
                
                <article className="post-excerpt" key={index}>
                    <h3>{post.title}</h3>
                    <p className="post-content">{post.content.substring(0, 100)}</p>
                    <Link
                        href={{
                            pathname: '/SinglePostPage',
                            query: { postId: post.id }
                        }}
                    >
                        <a className="button muted-button">View Post</a>
                    </Link>
                </article>
            ))}
        </section>
    )
}
