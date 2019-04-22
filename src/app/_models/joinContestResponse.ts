import { User } from './user'


export class joinContestResponse {
	ok				: string;
	response 		: string;
	problem			: string;
	error			: string;

	profile	 		: User;
}
