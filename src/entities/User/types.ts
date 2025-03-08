import type { TMeta } from '../../shared/api';

export type TPublicUser = {
	_id: TMeta['_id'];
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
