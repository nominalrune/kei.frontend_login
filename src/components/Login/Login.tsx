import { FC, useState, useEffect, useReducer, useRef } from 'react';
import useStyles from './useStyles';
import { LoginProp } from './propType';
import {
	UserSessionService as USS,
	UserController as UC
} from "User";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const RedirectAddrInput = () => (
	<input
		type="hidden"
		name="redirectTo"
		value={new URL(window.location.href).searchParams.get("redirectTo") || ""}
	/>
);

type InputParam={
	defaultVal?:string,
	placeholder?:string,
	errorMsg?:string
}

const EmailInput = (p:InputParam) => {
	const {defaultVal, placeholder, errorMsg} = p;
	return  (
	<TextField
		label="Email"
		defaultValue={defaultVal}
		name="email"
		type="email"
		placeholder={placeholder}
		helperText={errorMsg}
		aria-invalid={
			Boolean(errorMsg) ||
			undefined
		}
	/>
)};
const PasswordInput = (p:Omit<InputParam,"placeholder">) => {
	const {defaultVal, errorMsg} = p;
	return  (
	<TextField
		label="Password"
		defaultValue={defaultVal}
		name="password"
		type="password"
		helperText={errorMsg}
		aria-invalid={
			Boolean(errorMsg) ||
			undefined
		}
	/>
)};
export const Login: FC<LoginProp> = (props) => {
	const { children, ...attr } = props;
	const styles = useStyles(attr?.style);

	return (
		<div aria-label='login' className={attr?.className} style={styles.base} >
			aaaaaaaaaaaaaaaaaaaaaaaaa
			<form method="post">
				<RedirectAddrInput />

				<EmailInput />
				<PasswordInput />
				<button type="submit" className="button">
					Submit
				</button>
			</form>
		</div>
	);
};
