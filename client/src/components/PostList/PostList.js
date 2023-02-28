import {useEffect} from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch ,useSelector } from 'react-redux';

import * as actions from '../../redux/actions'
import {Post} from '../'
import {postsState$} from '../../redux/Selectors'

function PostList (){
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    // console.log('[PostLists] ',posts);
    useEffect(()=>{
        dispatch(actions.getPosts.getPostsRepuest());
    },[dispatch])

    return(
        <Grid container spacing={2} alignItems='stretch'>
            {
                posts.map((item)=>{
                    // console.log(item);
                    return(
                        <Grid item xs={12} sm={6} key={item._id}>
                            <Post data={item}/>
                        </Grid>
                    )
                })
            }
            {/* <Grid item xs={12} sm={6}>
                <Post/>
            </Grid> */}

            {/* <Grid item xs={12} sm={6}>
                <Post/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Post/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Post/>      
            </Grid> */}
        </Grid>
    )
}

export default PostList;