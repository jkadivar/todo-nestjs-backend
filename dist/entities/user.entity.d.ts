import { Task } from './task.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    tasks: Task[];
}
