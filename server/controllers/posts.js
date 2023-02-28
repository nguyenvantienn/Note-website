import { PostModel } from "../models/PostModel.js";

// Doc tat ca du lieu tu DB
export const getPosts = async (req,res) =>{
    try {
        //Them document vao DB
        // const post = new PostModel({
        //     title:'test',
        //     content:'test'
        // });
        // post.save(); 
        // .find() mac dinh return ra tat ca cac bai post trong DB
        const posts = await PostModel.find();
        console.log('posts' , posts);
        //response ve cho client 1 status voi thanh cong la 200 
        //va 1 doan Json voi du lieu duoc lay find
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({error: error })
    }
};

//Tao moi 1 Post
export const createPost = async(req,res) =>{
    try {
        //Lay du lieu tu phia client gui lem,
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    }  catch (error) {
        res.status(500).json({error: error })
    }
};


//Update 1 Post
export const updatePost = async(req,res) => {
    try {
        const updataPost = req.body;
        const post = await PostModel.findOneAndUpdate({_id : updataPost._id} , updataPost , {new : true});

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({error: error })
    }
}

//Delete 1 Post
export const deletePost = async(req,res) => {
    try {
        const deletePost = req.body;
        const post = await PostModel.findOneAndDelete({ _id : deletePost._id}, {new : true});

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({error: error })
    }
}