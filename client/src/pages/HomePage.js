import React from 'react'
import { Container, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';

import Header from '../components/Header/header';
import PostList from '../components/PostList/postList';
import useStyles from './styles';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/postModal/createPostModal';

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
      console.log('call modal');
      dispatch(showModal());
  }, [dispatch]);

    return <Container maxWidth="lg">
        <Header />
        <PostList />
        <CreatePostModal />
        <Fab
            color='primary'
            className={classes.fab}
            onClick={openCreatePostModal}
        >
            <AddIcon />
        </Fab>
    </Container>
}
