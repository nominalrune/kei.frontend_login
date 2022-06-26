import { FC, useState, useEffect, useReducer, useRef } from 'react';
import { Link } from "react-router-dom";

import { AccountMenuProp } from './propType';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
export const AccountMenu: FC<AccountMenuProp> = (props) => {
	const { user, anchorEl, toggle } = props;
	return (
		<Menu
			id="menu-appbar"
			anchorEl={anchorEl}
			// keepMounted
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			open={!!anchorEl}
			onClose={toggle}
		>
			{user ? (
				<MenuItem>
					<Link to="/logout">
						Logout
					</Link>
				</MenuItem>
			) : ([
					<MenuItem key={1}>
						<Link to="/login">Login</Link>
					</MenuItem>,
					<MenuItem key={2}>
						<Link to="/register">register</Link>
					</MenuItem>
			])}
		</Menu>
	);
};
