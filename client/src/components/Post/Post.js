import React,{useCallback , memo} from 'react'
import moment from 'moment'
import {useDispatch} from 'react-redux'

import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core';
import  MoreVertIcon  from '@material-ui/icons/MoreVert' ;
import FavoriteIcon from '@material-ui/icons/Favorite' ;
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './Style'
import {updatePost , deletePost} from '../../redux/actions'

function Post({data}){
    const classes = useStyles();
    const dispatch = useDispatch();
    console.log('re-reden' , data.title);
    const handleLike = useCallback(()=>{
        console.log('re-render HandleLike' , data.title);
        dispatch(updatePost.updatePostRepuest({...data, likeCount : data.likeCount+1}))
    },[dispatch,data])

    const handleDelete = useCallback(()=>{
        console.log('re-render HandleDelete' , data.title);
        dispatch(deletePost.deletePostRepuest({...data}))
    },[dispatch,data])

    return(
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={data.author}
                // title="Title"
                subheader={moment(data.updatedtAt).format('HH:MM DD/MM/YYYY')}
                // subheader="AAAA"
                action={
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                }
            />
            <CardMedia image={data.attachment} title="Title" className={classes.media }/>
            <CardContent>
                <Typography variant='h5' color='textPrimary'>{data.title}</Typography>
                <Typography variant='body2' component='p' color='textSecondary'>{data.content}</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleLike}>
                    <FavoriteIcon/>
                    <Typography component='span' color='textSecondary'>{`  ${data.likeCount} Like`}</Typography>

                </IconButton>
                <DeleteIcon onClick={handleDelete}/>
            </CardActions>
        </Card>
    )
}

export default memo(Post);