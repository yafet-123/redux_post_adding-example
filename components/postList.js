import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import {PostAuthor} from './PostAuthor'
import {TimeAgo} from './TimeAgo'

export function PostList() {
    const posts = useSelector((state)=> state.posts)
    console.log(posts)
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {posts.map((post,index)=>(
                
                <article className="post-excerpt" key={index}>
                    <h3>{post.title}</h3>
                    <p className="post-content">{post.content.substring(0, 100)}</p>
                    <TimeAgo timeStamp={post.date}/>
                    <PostAuthor userId={post.userId}/>
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
