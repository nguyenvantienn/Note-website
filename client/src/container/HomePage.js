
import { Container ,Fab } from '@material-ui/core'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {Header,PostList, CreatePostModel} from '../components'
import AddIcon from '@material-ui/icons/Add'
import useStyle from './HomePageStyle'
import { showModal } from '../redux/actions'


function HomePage(){
    const classes = useStyle()
    const dispatch = useDispatch();

    const openCreatePostModal = useCallback(()=>{
        dispatch(showModal())
    },[dispatch])

    return(
        <Container maxWidth='lg' > 
            <Header/>
            <PostList/>
            <Fab    
                color='primary'
                className={classes.fab}
                onClick={openCreatePostModal}
            >
                <AddIcon />
            </Fab>
            <CreatePostModel/>

        </Container>

        // <div>This is Home Page</div>
    )
}

export default HomePage;