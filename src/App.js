import Home from "./components/pages/Home"
import Posts from "./components/pages/Posts"
import Post from "./components/pages/Post"
import { useEffect, useState } from "react"
import axios from "axios"

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  // state to get all the Posts
  const [ posts, setPosts ] = useState([])

  // useEffect to get all the Posts
  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/blog")
      .then(response => {
        setPosts(response.data)
      })
        .catch(err => {
          console.log(err)
      })
  }, []) // empty dependency array so that it only loads on page load (once)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
          exact path="/"
          element={<Home />}
          />

          <Route 
          exact path="/posts"
          element={<Posts posts={posts}/>}
          />

          <Route 
          path="/posts/:id"
          element={<Post posts={posts}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
