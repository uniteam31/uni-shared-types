import type { TMeta } from '../../shared/api';
import type { IUser } from '../User';

export interface ISpace extends TMeta {
	ownerID: IUser['_id'];
	name: string;
	//
	membersIDs: IUser['_id'][];
	editorsIDs: IUser['_id'][];
}
