import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction.type;
}

export const getPosts = createActions({
    getPostRequest: undefined,
    getPostSuccess: (payload) => payload,
    getPostFailure: (err) => err
});

export const createPost = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure: (err) => err
});

export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure: (err) => err
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');