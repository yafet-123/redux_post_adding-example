import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
export function PostList() {
    const posts = useSelector((state)=> state.posts)
    
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {posts.map((post)=>(
                
                <article className="post-excerpt" key={post.id}>
                    <Link
                        href={{
                            pathname: '/SinglePostPage',
                            query: { postId: post.id },
                        }}      
                    >
                        <a>
                            <h3>{post.title}</h3>
                            <p className="post-content">{post.content.substring(0, 100)}</p>
                        </a>
                    </Link>
                </article>
            ))}
        </section>
    )
}
