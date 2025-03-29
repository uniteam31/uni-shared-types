import type { TMeta } from '../../shared/api';
import type { IUser, TPublicUser } from '../User';

export interface ISpace extends TMeta {
	ownerID: IUser['id'];
	name: string;
	description?: string;
	//
	members: TPublicUser[];
	editors: TPublicUser[];
}
