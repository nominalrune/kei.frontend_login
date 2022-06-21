import {FC, useState, useEffect, useReducer, useRef} from 'react';
import useStyles from './useStyles';
import {LoginProp} from './propType'

export const Login: FC<LoginProp> =(props) => {
	const { children, ...attr } = props;
	const styles = useStyles(attr?.style);

	return (
			<div aria-label='login' className={attr?.className} style={styles.base} >
				{children}
			</div>
	);
};