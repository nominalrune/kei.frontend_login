import { FC, useState, useEffect, useReducer, useRef, ChangeEvent } from 'react';
import { LoginProp } from './propType';

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Stack from '@mui/material/Stack';
const RedirectAddrInput = () => (
	<input
		type="hidden"
		name="redirectTo"
		value={new URL(window.location.href).searchParams.get("redirectTo") || ""}
	/>
);

type InputParam = {
	value:string
	handleChange?:(e:ChangeEvent<HTMLInputElement>)=>void,
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
	const { children, ...attr } = props;
	const [values,setValues]=useState({email:"",password:""});
	const handleChange=(key_label:string)=>(e:ChangeEvent<HTMLInputElement>)=>{
		setValues({...values,[key_label]:e.target.value});
	};
	const backendUrl="http://localhost:7780";
	async function letsLogin(){
		const res= await fetch(`${backendUrl}/login?email=${values.email}&password=${values.password}`,{
			method:"POST",
			mode:'no-cors',
			headers:new Headers({
				"Access-Control-Allow-Origin": backendUrl,
				"Cross-Origin-Resource-Policy": "cross-origin",
				"Content-Security-Policy":"cross-origin"
			}),
			credentials:"include"
		}).then((res)=>{console.log(res)})
	}

	return (
			<Stack spacing={4} alignItems="center" aria-label='login'>
				<RedirectAddrInput />

				<EmailInput value={values.email} handleChange={handleChange("email")} />
				<PasswordInput value={values.password} handleChange={handleChange("password")}/>
				<Button endIcon={<SendIcon/>} onClick={letsLogin}>
					login
				</Button>
			</Stack>
	);
};
