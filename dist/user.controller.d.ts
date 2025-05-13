import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(body: {
        username: string;
        password: string;
    }): Promise<object>;
    login(body: {
        username: string;
        password: string;
    }): Promise<object>;
}
