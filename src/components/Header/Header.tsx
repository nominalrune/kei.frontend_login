import { FC, useState, useEffect, useReducer, useRef } from 'react';
import useStyles from './useStyles';
import { HeaderProp } from './propType';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export const Header: FC<HeaderProp> = (props) => {
	const styles = useStyles(props?.style);
	const [anchorEl, setAnchorEl] = useState(null);


	const handleMenu = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div aria-label='header' className={props?.className} style={styles.base} >
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							account system
						</Typography>
						<div>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								{data.user ? (
									<div className="user-info">
										<span>{`Hi ${data.user.username}`}</span>
										<form action="/logout" method="post">
											<button type="submit" className="button">
												Logout
											</button>
										</form>
									</div>
								) : (
									<MenuItem><Link to="/login">Login</Link></MenuItem>
								)}
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</Box>

		</div>
	);
};
