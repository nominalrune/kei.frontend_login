import { FC, useState, ChangeEvent } from 'react';
import { LoginProp } from './propType';

import {login} from 'services/session/login';

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from '@mui/material/Stack';


type InputParam = {
	value: string;
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void,
	placeholder?: string,
	errorMsg?: string;
};

const EmailInput = (p: InputParam) => {
	const { value, handleChange, placeholder, errorMsg } = p;
	return (
		<TextField
			label="Email"
			defaultValue={value}
			onChange={handleChange}
			name="email"
			type="email"
			placeholder={placeholder}
			helperText={errorMsg}
			aria-invalid={
				Boolean(errorMsg) ||
				undefined
			}
		/>
	);
};
const PasswordInput = (p: Omit<InputParam, "placeholder">) => {
	const { value, handleChange, errorMsg } = p;
	return (
		<TextField
			label="Password"
			defaultValue={value}
			onChange={handleChange}
			name="password"
			type="password"
			helperText={errorMsg}
			aria-invalid={
				Boolean(errorMsg) ||
				undefined
			}
		/>
	);
};
export const Login: FC<LoginProp> = (props) => {
	const { set, children, ...attr } = props;
	const [values, setValues] = useState({ email: "", password: "" });
	const handleChange = (key_label: string) => (e: ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [key_label]: e.target.value });
	};
	function doLogin(){
		login({email:values.email,password:values.password},set,"/")
	}
	
	return (
		<Stack component={"form"} spacing={4} alignItems="center" aria-label='login'>
			<EmailInput value={values.email} handleChange={handleChange("email")} />
			<PasswordInput value={values.password} handleChange={handleChange("password")} />
			<Button endIcon={<SendIcon />} onClick={doLogin}>
				login
			</Button>
		</Stack>
	);
};
