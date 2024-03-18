import { Task } from './tasks.model';
import { CreateTaskDTO } from './dto/create-tast.dto';
export declare class TasksService {
    private tasksArray;
    getAllTasks(): Task[];
    createTask(createTaskDto: CreateTaskDTO): Task;
    getTaskById(id: string): Task;
}
