import { login } from "Session/login";
import { logout } from "Session/logout";
import { register } from "Session/register";
import { createUserSession, getUser, requireUserId } from './session';
export class UserSessionService {
	static login=login;
	static logout=logout;
	static register=register;
	static create=createUserSession;
	static get=getUser;
	static needsUserIdToDoThis=requireUserId;
};
