import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import PostDetails from "../PostDetails"
import NotFound from "./NotFound"
import PostEditForm from "../PostEditForm"
import axios from "axios"

export default function Post({ posts }) {
    // boolean to show form or details
    const [ showForm, setShowForm ] = useState(false)
    const [ post, setPost ] = useState({})

    const { id } = useParams()

    // ask the backend what the details about this id are
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            .then(response => {
                setPost(response.data)
            })
            .catch(console.log)
    }, [showForm])
    return (
        <>

            {
                showForm ? 
                    <PostEditForm 
                        post={post}
                        setShowForm={setShowForm}
                        showForm={showForm} 
                        /> : 
                        <PostDetails post={post} />
            }

            <button 
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Exit" : "Edit"}
            </button>

            <div>
                <Link to="/posts">Back to Posts</Link>
            </div>
        </>
    )
}