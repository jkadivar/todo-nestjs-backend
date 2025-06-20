import { User } from './user.entity';
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: string;
    due_date: Date;
    user: User;
}
