import React from 'react'
import { Grid } from '@material-ui/core'
import Post from './Post/post';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';

export default function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    console.log('posts', posts);

    React.useEffect(() => {
        dispatch(actions.getPosts.getPostRequest())
    }, [dispatch]);

    return <Grid container spacing={2} alignItems='stretch'>
        {posts.map((post) => (
            <Grid item xs={12} sm={6}>
                <Post key={post._id} post={post} />
            </Grid>
        ))}
    </Grid>
}
