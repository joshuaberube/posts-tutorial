import axios from 'axios'
import { Component } from 'react'
import Post from './Post/Post'
import AddPost from './AddPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("/api/posts")
        .then(res => this.setState({posts: res.data}))
        .catch(err => console.error(err))
    }

    removePost = index => {
        axios.delete(`/api/post/${index}`)
        .then(res => this.setState({posts: res.data}))
        .catch(err => console.error(err))
    }

    addPost = (e, newPostData) => {
        e.preventDefault()
        
        axios.post("/api/post", newPostData)
        .then(res => this.setState({posts: res.data}))
        .catch(err => console.error(err))
    }

    render() {
        const mappedPosts = this.state.posts.map((post, index) => (
            <Post 
                key={index}
                post={post}
                index={index}
                removePost={this.removePost}
            />
        ))

        return (
            <div>
                <AddPost addPost={this.addPost}/>
                {mappedPosts}
            </div>
        )
    }
}

export default Posts