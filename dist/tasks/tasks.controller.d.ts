import { TasksService } from './tasks.service';
import { Task } from 'src/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    findAll(req: any): Promise<Task[]>;
    create(createTaskDto: CreateTaskDto, req: any): Promise<Task>;
    findOne(id: string, req: any): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto, req: any): Promise<Task>;
    remove(id: string, req: any): Promise<void>;
}
