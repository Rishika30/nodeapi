const Post = require('../models/post');

exports.getPosts = (req,res)=>{
    const posts = Post.find().then((posts)=>{
        res.json({posts});
    })
    .catch(err => console.log(err));
};

exports.createPost = (req,res)=>{
    const post= new Post(req.body);
    //console.log("Creating post: ", req.body);
    post.save().then(result =>{
        res.json({ post: result});
    });
};