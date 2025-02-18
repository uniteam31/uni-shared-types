import type { TMeta } from '../../shared/api';

export interface IUser {
	_id: TMeta['_id'];
	firstName: string;
	username: string;
	avatar?: string;
}
