import axios from 'axios'
import { Component } from 'react'

class Posts extends Component {
    state = {
        posts: [],
        title: "",
        description: ""
    }

    // componentDidMount with getPosts inside of it
    // async componentDidMount() {
    //     try {
    //         const { data: posts } = await axios.get("/api/posts")
    //         console.table(posts)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = async () => {
        try {
            const { data: posts } = await axios.get("/api/posts")
            this.setState({posts})
        } catch (err) {
            console.error(err)
        }
    }

    changeHandler = e => this.setState({[e.target.name]: e.target.value})

    removePost = async index => {
        try {
            const {data: updatedPosts} = await axios.delete(`/api/post/${index}`)

            this.setState({posts: updatedPosts})
        } catch (err) {
            console.error(err)
        }
    }

    addPost = async e => {
        e.preventDefault()
        const { title, description } = this.state
        
        try {
            const {data: updatedPosts} = await axios.post("/api/post", { title, description })
            this.setState({posts: updatedPosts})
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        const mappedPosts = this.state.posts.map((post, index) => {
            return (
                <div>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    <input 
                        type="button"
                        value="X"
                        onClick={() => this.removePost(index)} 
                    />
                </div>
            )
        })

        // const { posts } = this.state
        // const mappedPosts = posts.map(({title, description}) => (
        //     <div>
        //         <span>{title}</span>
        //         <p>{description}</p>
        //     </div>
        // ))

        const { title, description } = this.state

        return (
            <div>
                <div>
                    <form onSubmit={this.addPost}>
                        <input 
                            type="text" 
                            name="title" 
                            value={title} 
                            onChange={e => this.changeHandler(e)} 
                        />
                        <input 
                            type="text" 
                            name="description" 
                            value={description}
                            //implicitly adds e, so you don't need to add it :) 
                            onChange={this.changeHandler} 
                        />
                        <button type="submit">Add Post</button>
                    </form>
                    
                </div>
                {mappedPosts}
            </div>
        )
    }
}

export default Posts