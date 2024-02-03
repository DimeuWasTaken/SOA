import { Employee } from "@prisma/client";
import { Type } from "class-transformer";
import { IsDateString, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class EmployeeDto {
    @IsDateString()
    @IsNotEmpty()
    employmentDate: Date;

    @IsInt()
    @Type(() => Number)
    @IsNotEmpty()
    profileId: number;

    @IsInt()
    @Type(() => Number)
    @IsOptional()
    managerId: number;

    @IsOptional()
    manager: Employee;

    @IsOptional()
    workers: Employee[];
}