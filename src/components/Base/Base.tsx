import { FC, useState, useEffect, useReducer, useRef } from 'react';
import { BaseProp } from './propType';
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
export const Base: FC<BaseProp> = (props) => {

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
