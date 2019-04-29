import { Contest }
	from './contest';


export class ViewContestResponse {
	ok					: string;
	response 			: string;
	problem				: string;

	contest 				: Contest;
}
