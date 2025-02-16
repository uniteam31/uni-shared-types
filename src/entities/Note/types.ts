// TODO
/* Не смог разобраться с тем, чтобы заменить абсолютный импорт на относительный или
 * сделать нормальное поведение при сборке
 * */
import type { TMeta } from '../../shared/api';

/** Поля у формы заметки */
export type TNoteFormFields = {
	title?: string;
	text?: string;
};

/** Данные заметки */
export type TNodeData = TNoteFormFields & {
	author: string;
};

/** Целый экземпляр */
export interface INote extends TNodeData, TMeta {}
