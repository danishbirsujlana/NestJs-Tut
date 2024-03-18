import { IsNotEmpty } from "class-validator";

export class CreateTaskDTO {
    @IsNotEmpty() // validation
    title: string;

    @IsNotEmpty()
    description: string;
}