import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-tast.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    // M1 -> we will get all the body parameters
    // createTask(@Body() body) {}

    // M2 -> we get only what we want
    // createTask(@Body("title") title, @Body("description") description) {

    // M3 -> using DTO
    createTask(@Body() createTaskDto: CreateTaskDTO) {
        return this.tasksService.createTask(createTaskDto);
    }

    @Get("/:id")
    getTaskById(@Param("id") id: string) {
        const task = this.tasksService.getTaskById(id);
        return task
    }
}