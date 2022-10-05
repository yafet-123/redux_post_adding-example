import { Navbar } from "../components/Navbar"
import { PostList } from "../components/postList"
import { AddPostForm } from "../components/AddPostForm"

export default function Home() {
    
    return(
        <>
           <Navbar /> 
           <section>
                <h2>Welcome to the Redux Essentials example app!</h2>
                
            </section>
            <AddPostForm />
            <PostList />
        </>
    )
}
    
