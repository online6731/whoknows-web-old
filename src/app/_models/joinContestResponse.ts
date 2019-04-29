import { User } from './user'


export class JoinContestResponse {
	ok				: string;
	response 		: string;
	problem			: string;
	error			: string;

	profile	 		: User;
}
