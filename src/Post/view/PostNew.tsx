import { useState } from 'react';

import { create } from 'Post/query/create';

import { TextInput } from 'components/common/input';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export function LogNew({ userId }: { userId: number; }) {
	const [postData, setPostData] = useState({ title: "", content: "" });
	const handleChange = (key_label: string) => (e: any) => {
		setPostData({ ...postData, [key_label]: e.target.value });
	};
	function doCreate() {
		console.table(postData);
		create(postData, userId);
	}

	return (
		<Stack component={"form"} spacing={4} alignItems="center" aria-label='lognew'>
			<TextInput name='title' label='Title' type='text' onChange={handleChange('title')} value={postData.title} />
			<TextInput name='content' label='Content' type='text' onChange={handleChange('content')} value={postData.content} />

			<Button endIcon={<SendIcon />} onClick={doCreate}>
				login
			</Button>
		</Stack>
	);
}
