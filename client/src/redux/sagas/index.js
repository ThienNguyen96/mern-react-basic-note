import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action) {
    try {
        // same as async await
        const posts = yield call(api.fetchPosts);
        // put trigger 1 action in saga
        yield put(actions.getPosts.getPostSuccess(posts.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getPosts.getPostFailure(err));        
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (err) {
        console.error(err);
        yield put(actions.createPost.createPostFailure(err));        
    }
}

function* updatePostSaga(action) {
    try {
        const updatePost = yield call(api.updatePost, action.payload);
        yield put(actions.updatePost.updatePostSuccess(updatePost.data));
    } catch (err) {
        console.error(err);
        yield put(actions.updatePost.updatePostFailure(err));        
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostRequest, fetchPostSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;