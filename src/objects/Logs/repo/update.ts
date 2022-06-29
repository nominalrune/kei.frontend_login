import { ILogData } from 'objects/Logs/ILogData';
import { objectToQuery } from 'util/url/objectToQuery';

import { backendUrl as _backendUrl } from 'config/backend';

export async function create(
	postInput: ILogData&{id:number},
	backendUrl = _backendUrl
) {
	const {id,...query}=postInput;
	const post = await fetch(`http://${backendUrl}/log/${id}/edit?${objectToQuery(postInput)}`, {
		method: "POST",
		mode: 'cors',
		headers: new Headers({
			"Access-Control-Allow-Origin": backendUrl,
			"Cross-Origin-Resource-Policy": "cross-origin",
			"Content-Security-Policy": "cross-origin",
			'Accept': 'application/json',
		}),
		referrerPolicy: 'no-referrer',
		credentials: "include"
	})
		.then<ILogData>(res => res.json());
	return post;
}
