export default function Form({ postForm, setPostForm, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name: </label>
            <input type="text"
                placeholder="Type Here"
                value={postForm.name}
                onChange={e => setPostForm({...postForm, name: e.target.value })}
                id="name"
            />
            <label htmlFor="Body">Body: </label>
            <input type="text"
                placeholder="Type Here"
                value={postForm.body}
                onChange={e => setPostForm({...postForm, Body: e.target.value })}
                id="body"
            />
            <label htmlFor="date">Date: </label>
            <input type="text"
                placeholder="YYYY-MM-DD"
                value={postForm.date}
                onChange={e => setPostForm({...postForm, date: e.target.value })}
                id="date"
            />

            <input type="submit"/>
            
        </form>
    )
}