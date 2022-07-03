import type { IPostData } from "Post/Post";
import { list } from "Post/query/list";

import { useQuery } from 'react-query';

import {PostCard} from "./PostCard";
import Stack from '@mui/material/Stack';

type p = { userId: number };
export function PostList({ userId }: p) {
	const { isLoading, isError, data, error } = useQuery(['logs', userId], () => list(userId));
	return data
	? (
		<Stack component={"div"} spacing={4} alignItems={"center"} aria-label='login'>
			{  data.map((post, i) => (
				<PostCard key={i} post={post}/>
			))}
		</Stack>
	)
	: <div>loading...</div>;

}
