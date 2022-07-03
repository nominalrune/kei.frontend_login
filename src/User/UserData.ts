export interface IUserData{
	id?: number;
	name: string;
	email: string;
	createdAt?: Date;
	updatedAt?: Date;
	passwordHash?: string;
}
