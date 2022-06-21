import type {IUserData}from "User";
export type AccountMenuProp =
	React.HTMLAttributes<HTMLDivElement>
	& {user?: IUserData, anchorEl:HTMLElement|null, toggle:()=>void};
