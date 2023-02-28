import { Modal ,Button ,TextField ,TextareaAutosize} from "@material-ui/core";
import FileBase64 from 'react-file-base64';
import { useSelector , useDispatch } from "react-redux";
import {useState , useCallback} from 'react'

import useStyles from "./styles";
import {hideModal ,createPost} from '../../redux/actions'


// import {modalState$} from '../../redux/Selectors'

const CreatePostModel = () => {
    const [data,setData] = useState({
        title:'',
        content:'',
        attachment:''
    })

	const { isShow } = useSelector((state) => state.modal);
    const classes = useStyles();
    const dispatch = useDispatch();

    const onClose = useCallback(()=>{
        dispatch(hideModal());
    },[dispatch])

    const onSumit = useCallback(()=>{
        console.log({ data });
        dispatch(createPost.createPostRepuest(data));
		setData((prev)=>({ 
			title:'',
        	content:'',
        	attachment:''}))
		dispatch(hideModal());
    },[data,dispatch])

	const body = (
		<div className={classes.paper} id="simple-modal-title">
			<h2>Create New Post</h2>
			<form noValidate autoComplete="off" className={classes.form}>
				<TextField
					className={classes.title}
					required
					label="Title"
					value={data.title}
					onChange={(e) =>
						setData({ ...data, title: e.target.value })
					}
				/>
				<TextareaAutosize
					className={classes.textarea}
					rowsMin={10}
					rowsMax={15}
					placeholder="Content..."
					value={data.content}
					onChange={(e) =>
						setData({ ...data, content: e.target.value })
					}
				/>
				<FileBase64
					accept="image/*"
					multiple={false}
					type="file"
					value={data.attachment}
					onDone={({ base64 }) =>
						setData({ ...data, attachment: base64 })
					}
				/>
				<div className={classes.footer}>
					<Button
						variant="contained"
						color="primary"
						component="span"
						fullWidth
						onClick={onSumit}
					>
						Create
					</Button>
				</div>
			</form>
		</div>
	);

	// console.log(isShow);
	return (
		<div>
			<Modal open={isShow} onClose={onClose}>{body}</Modal>
		</div>
	);
};

export default CreatePostModel;
