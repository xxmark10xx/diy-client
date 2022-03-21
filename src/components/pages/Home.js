import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <h1>Future of Prosthetics</h1>
            <p>This is a blog about the future of prosthetics where people can add there thoughts about the world of prosthesis.
                So, Post your thought about it!!!</p>            
            
            <div>
                <Link to="/posts">See all Posts</Link>
            </div>
        </>
    )
}