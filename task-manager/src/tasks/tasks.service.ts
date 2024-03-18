import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as ID } from "uuid";
import { CreateTaskDTO } from './dto/create-tast.dto';

@Injectable()
export class TasksService {
    private tasksArray: Task[] = [];

    getAllTasks() {
        return this.tasksArray;
    }

    createTask(createTaskDto: CreateTaskDTO) {
        const { title, description } = createTaskDto;
        console.log(title, description);
        const task: Task = {
            id: ID(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasksArray.push(task);
        return task;
    }

    getTaskById(id: string) {
        // if task not found return 404 error
        const task = this.tasksArray.find(task => task.id === id);
        if (!task) {
            throw new NotFoundException();
        }
        return task
    }
}