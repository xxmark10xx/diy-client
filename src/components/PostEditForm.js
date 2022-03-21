import { useState } from "react"
import axios from "axios"
import Form from "./Form"

export default function PostEditForm({ post, setShowForm, showForm }) {
    const [ postForm, setPostForm ] = useState(post)

    const handleSubmit = e => {
        e.preventDefault()

        // doing axios to post edit to db -- FORMAT -- axios.method(URL, request body, options)
        axios.put(`${process.env.REACT_APP_SERVER_URL}/blog/${post._id}`, postForm)
            .then(response => {
                setShowForm(!showForm)
            })
            .catch(console.log)
    }

    return (
        <>
            <h1>Edit the Post</h1>

            <Form 
                postForm={postForm}
                handleSubmit={handleSubmit}
                setPostForm={setPostForm}
            />
        </>

    )
}