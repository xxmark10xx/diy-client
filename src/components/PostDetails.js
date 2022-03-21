export default function PostDetails({ post }) {
    return (
        <>
            <h1>Post Details</h1>

            <h2>{post.name}</h2>

            <h3>{post.body}</h3>

            <h3>{post.date}</h3>

            <h4>{post.comments}</h4>
        </>
    )  
}