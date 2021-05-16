//database query db.getPosts response
const posts = [
    {
        title: "Hello World!",
        description: "this is my first app, yay!",
    },
    {
        title: "Sunkissed",
        description: "went to the beach today, horray",
    },
    {
        title: "got married today!!!!!!!!!!!",
        description: "happiest day of my life!!!!!!!",
    },
    {
        title: "Played Super Mario Odyssey today, best game on Switch",
        description: "wow dis game is good",
    }
]

module.exports = {
    getPosts: (req, res) => {
        res.status(200).send(posts)
    },
    addPost: (req, res) => {
        //insert into posts table if using db (addPost function)
        posts.push(req.body)
        //req.body looks like {title: "title the user entered", description: "description user entered"}

        res.status(200).send(posts)
    },
    removePost: (req, res) => {
        const { index } = req.params
        posts.splice(index, 1)

        res.status(200).send(posts)
    }
}