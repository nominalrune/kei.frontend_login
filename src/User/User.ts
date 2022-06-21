interface IUser {
	id: number;
	username: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
	passwordHash?: string;
}

class User implements IUser {
	#id: number;
	#username: string;
	#createdAt: Date;
	#updatedAt: Date;
	#email: string;
	#passwordHash?: string;
	constructor(arg: {
		username: string,
		email: string,
		id: number;
		createdAt: Date,
		updatedAt: Date,
		passwordHash?: string;
	}) {
		this.#username = arg.username;
		this.#email = arg.email;
		this.#id = arg.id;
		this.#createdAt = arg.createdAt;
		this.#updatedAt = arg.updatedAt;
		this.#passwordHash = arg.passwordHash;
	}
	get id(): number {
		if(this.#id===undefined) throw new Error("id is undefined");
		return this.#id;
	}
	get username(): string {
		return this.#username;
	}
	get email(): string {
		return this.#email;
	}
	get createdAt(): Date {
		if(this.#createdAt===undefined) throw new Error("createdAt is undefined");
		return this.#createdAt;
	}
	get updatedAt(): Date {
		if(this.#updatedAt===undefined) throw new Error("updatedAt is undefined");
		return this.#updatedAt;
	}
	get passwordHash(): string {
		if(this.#passwordHash===undefined) throw new Error("passwordHash is undefined");
		return this.#passwordHash;
	}
}

export  type { IUser };
export { User };
