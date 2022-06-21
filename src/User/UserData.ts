export interface IUserData{
	id?: number;
	username: string;
	email: string;
	createdAt?: Date;
	updatedAt?: Date;
	passwordHash?: string;
}
