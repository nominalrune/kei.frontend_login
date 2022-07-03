import type {IPostData}from 'Post/Post';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export function PostDetail(userId:number,post:IPostData){
	
	return (
		<Card>
			<Typography fontSize={3}>
				{post.title}
			</Typography>
			<hr/>
			<p>{post.content}</p>
		</Card>
	)
}
