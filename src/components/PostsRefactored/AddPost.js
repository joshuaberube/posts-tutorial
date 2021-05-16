import { Component } from 'react'

class AddPost extends Component {
    state = {
        title: "",
        description: ""
    }

    changeHandler = e => this.setState({[e.target.name]: e.target.value})

    addPostProperties = e => {
        const { title, description } = this.state
        this.props.addPost(e, {title, description})
    }

    render() {
        const { title, description } = this.state

        return (
            <form onSubmit={this.addPostProperties}>
                <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={this.changeHandler} 
                />
                <input 
                    type="text" 
                    name="description" 
                    value={description}
                    onChange={this.changeHandler} 
                />
                <button type="submit">Add Post</button>
            </form>
        )
    }
}

export default AddPost