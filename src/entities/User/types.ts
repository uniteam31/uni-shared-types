import type { TMeta } from '../../shared/api';

export type TPublicUser = {
	id: TMeta['id'];
	personalSpaceID: string;
	//
	firstName: string;
	lastName?: string;
	username: string;
	avatar?: string;
};

export type TPrivateUser = {
	email: string;
	educationalEmail?: string;
};

export interface IUser extends TPublicUser, TPrivateUser {}
