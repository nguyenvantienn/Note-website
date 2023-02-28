
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type: String,
        required :true
    },
    content: {
        type :String,
        required :true
    },
    author:{
        type: String,
        required :true,
        default : 'Noname'
    },
    attachment : String,
    likeCount : {
        type: Number,
        default : 0
    }
    //Tu dong them 2 field la createAt va updateAt
}, {timestamps : true})
//Tao va xuat 1 Model
export const PostModel = mongoose.model('Post',schema );
