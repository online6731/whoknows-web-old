import { Contest }
	from './contest';


export class ContestNewResponse {
	ok				: string;
	response 		: string;
	problem			: string;
	error			: string;

	contest	 		: Contest;
}
