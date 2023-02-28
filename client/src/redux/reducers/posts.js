import { INIT_STATE } from "../../constant";
import { getPosts, getType , createPost , updatePost ,deletePost} from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
    // console.log('INIT State  ',state);
    // console.log(action.type);
    switch(action.type){
        case getType(getPosts.getPostsRepuest): //
            return {
                ...state,
                isLoading :true,
            }
        case getType(getPosts.getPostsSuccess): //
            // console.log('PayLoad  :  ',action.payload);
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }
        case getType(getPosts.getPostsFalse): //
            return {
                ...state,
                isLoading :false,
            }
        case getType(createPost.createPostSuccess):
            // console.log('CreatePost success');
            // console.log('data : ' , action.payload );
            return {
                ...state,
                data : [ ...state.data , action.payload]
            }
        case getType(updatePost.updatePostSuccess):
            // console.log('UpdatePost success');
            // console.log('data : ' , action.payload );
            return {
                ...state,
                data : state.data.map((item)=>item._id === action.payload._id ?action.payload : item),
            }
        case getType(deletePost.deletePostSuccess):
            // console.log('UpdatePost success');
            // console.log('data : ' , action.payload );
            let index = state.data.map(item=>item._id).indexOf(action.payload._id);
            var arr = state.data;
            if(index !== -1){
                let arr1 = arr.splice(index,1);
                console.log(arr1);
                let arr2 =  [1,2,3];
                let a = arr2.splice(1,0,8);
                console.log(a);
            }
            return {
                ...state,
                data: [...arr],
            }
        default:
            return state;
    }
};