import {User} from './user';

export class ProfileResponse {
    ok      : boolean;
    problem : string;
    profile : User;
}
