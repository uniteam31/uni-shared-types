import type { TMeta } from '../../shared/api';

export type TUserServiceInfo = {
	isInited: boolean;
};

export type TPublicUser = {
	id: TMeta['id'];
	firstName: string;
	lastName?: string;
	username: string;
	avatar?: string;
};

export type TPrivateUser = {
	email: string;
	educationalEmail?: string;
};

export interface IUser extends TPublicUser, TPrivateUser, TUserServiceInfo {}
