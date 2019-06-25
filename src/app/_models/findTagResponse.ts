import { Tag } from './tag';

export class FindTagResponse{
	ok			: string;
	problem		: string;
	tags		: Tag[];
}
