import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'
export default function SinglePostPage() {
    const router = useRouter()
    const { postId } = router.query
    const post = useSelector(state => state.posts.find(post => post.id === postId))
    if(!post){
        return(
            <>
                <Navbar />
                <section>
                    <h2>Post not found</h2>
                </section>
            </>
        )
    }
    return (
        <>
            <Navbar />
            <section>
                <article className="post">
                    <h2>{post.title}</h2>
                    <p className="post-content">{post.content}</p>
                    <Link
                        href={{
                            pathname: '/EditPostForm',
                            query: { postId: post.id }
                        }}
                    >
                        <a className="button">Edit Post</a>
                    </Link>
                    
                </article>
            </section>
        </>
    )
}
