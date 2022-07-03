import type {IPostData}from 'Post/Post';


import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export function PostCard({post:IPostData}){
	
	
	return (
		<Card>
			<Typography fontSize={3}>
				{post.title}
			</Typography>
			<p>{post.content}</p>
		</Card>
	)
}
