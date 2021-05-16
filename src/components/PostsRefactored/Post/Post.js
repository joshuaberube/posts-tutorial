const Post = ({post: {title, description}, index, removePost}) => (
    <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <input 
            type="button"
            value="X"
            onClick={() => removePost(index)} 
        />
    </div>
)

export default Post