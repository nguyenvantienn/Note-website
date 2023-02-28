import {call, put , takeLatest} from 'redux-saga/effects';
import * as actions from '../actions';
import * as apis from '../../api'


function* fetchPostsSaga(action) {
    try {
        const posts = yield call(apis.fetchPosts);
        // console.log('fetchPostsSaga : ', posts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getPosts.getPostsFailure(err));
    }
}


function* createPostSaga(action) {
    try {
        // console.log('createPostSaga');
        const post = yield call(apis.createPost, action.payload);
        // console.log('createPostSaga - Post: ' , post);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (err) {
        console.error(err);
        yield put(actions.createPost.createPostFailure(err));
    }
}

function* updatePostSaga(action) {
    try {
        // console.log('updatePostSaga : ' ,action);
        const post = yield call(apis.updatePost, action.payload);
        // console.log('updatePostSaga - Post: ' , post);
        yield put(actions.updatePost.updatePostSuccess(post.data));
    } catch (err) {
        console.error(err);
        yield put(actions.updatePost.updatePostFailure(err));
    }
}

function* deletePostSaga(action) {
    try {
        // console.log('updatePostSaga : ' ,action);
        const post = yield call(apis.deletePost, action.payload);
        // console.log('updatePostSaga - Post: ' , post);
        yield put(actions.deletePost.deletePostSuccess(post.data));
    } catch (err) {
        console.error(err);
        yield put(actions.deletePost.deletePostFailure(err));
    }
}




function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRepuest ,fetchPostsSaga)
    yield takeLatest(actions.createPost.createPostRepuest ,createPostSaga)
    yield takeLatest(actions.updatePost.updatePostRepuest ,updatePostSaga)
    yield takeLatest(actions.deletePost.deletePostRepuest ,deletePostSaga)
}

// generator function (ES6)
export default mySaga;