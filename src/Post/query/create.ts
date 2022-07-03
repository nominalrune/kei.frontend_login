import type { IPostInputData, IPostData } from 'Post/Post';
import { objectToQuery } from 'util/url/objectToQuery';
import { get } from 'util/request';

import { backendUrl as _backendUrl } from 'config/backend';

export async function create(
	postInput: IPostInputData,
	userId:number,
	backendUrl = _backendUrl
) {
	const _post = await get<IPostData>(`http://${backendUrl}/post/new?userId=${userId}&${objectToQuery(postInput)}`);
	return _post;
}
