import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-tast.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): import("src/tasks/tasks.model").Task[];
    createTask(createTaskDto: CreateTaskDTO): import("src/tasks/tasks.model").Task;
    getTaskById(id: string): {};
}
