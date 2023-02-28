import { createActions , createAction } from 'redux-actions'

export const getType = (reduxAction) =>{
    const type = reduxAction ? reduxAction().type:'';
    return type;
    // return reduxAction().type;
}//Function return type of action

export const getPosts = createActions({
    getPostsRepuest : undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFalse : (err) => err,
})

export const createPost = createActions({
    createPostRepuest : (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFalse : (err) => err,
});
export const updatePost = createActions({
    updatePostRepuest : (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFalse : (err) => err,
});

export const deletePost = createActions({
    deletePostRepuest : (payload) => payload,
    deletePostSuccess: (payload) => payload,
    deletePostFalse : (err) => err,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');
/*
    Khi tao action bang method createActions =>tung action se la 1 fuction
    va tra ve 1 object {
        type : ten cua action, Ex: type: 'getPostsSuccess;,
        payload: la gia tri tra ve cua funcion
    }

*/
