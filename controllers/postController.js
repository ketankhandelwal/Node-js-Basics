let postController = {}

postController.post = function (req , res) {

    console.log(req.user.name)
    res.json((DETAILS.filter(post => post.username === req.user)));

}

module.exports = postController