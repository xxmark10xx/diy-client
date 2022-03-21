import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Form from "../Form"

export default function Posts({ posts, setPosts }) {
    // controlled form to create a new Post
    const [ formData, setFormData ] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, formData)
            .then(response => {
                setFormData({})
                return axios.get(process.env.REACT_APP_SERVER_URL + "/blog")
            })
            .then(response => setPosts(response.data))
            .catch(console.log)
    } 
    
    // render all the posts with the links to /posts/:id
    const postLinks = posts.map((post, idx) => {
        return (
            <div key={`post-link-${idx}`}>
                <Link to={`/posts/${post._id}`}>{post.name}</Link>
            </div>
        )
    })

    return (
        <>
            <h1>All Posts</h1>

            <Form 
                postForm={formData}
                setPostForm={setFormData}
                handleSubmit={handleSubmit}
            />

            {postLinks}
            <Link to="/">Back to Home Page</Link>
        </>
    )
}