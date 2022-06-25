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
					<form action="/logout" method="post">
						<button type="submit" className="button">
							Logout
						</button>
					</form>
				</MenuItem>
			) : ([
					<MenuItem>
						<Link to="/login">Login</Link>
					</MenuItem>,
					<MenuItem>
						<Link to="/login">Login</Link>
					</MenuItem>
			])}


		</Menu>
	);
};
