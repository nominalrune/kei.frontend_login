import type {IPostData}from 'Post/Post';

import {useParams} from 'react-router-dom';

import { useQuery } from 'react-query';
import { get } from 'Post/query/get';

import { PostCard } from './PostCard';

export function PostDetail() {
	const id=parseInt(useParams()?.id??"invalid query!!"); // TODO better we separate react-router-dom and view, so that the Post domain be independent of router system?
	if(isNaN(id)){return  <>404 you are wrong.</>}
	const {data}=useQuery(['post'],async ()=>{
		return await get(id);
	})
	return data 
			? <PostCard post={data} />
			: <div>loading...</div>
}