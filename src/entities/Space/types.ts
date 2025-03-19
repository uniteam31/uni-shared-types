import type { TMeta } from '../../shared/api';
import type { IUser } from '../User';

export interface ISpace extends TMeta {
	ownerID: IUser['id'];
	name: string;
	//
	membersIDs: IUser['id'][];
	editorsIDs: IUser['id'][];
}
