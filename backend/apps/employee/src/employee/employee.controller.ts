import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from '../../../../dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('employees')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    @MessagePattern('getemployee')
    async getEmployee(@Body() payload: any){
        const { id, access_token } = payload;
        return this.employeeService.getEmployee(id);
    }

    @MessagePattern('addemployee')
    async addEmployee(@Body() payload: any) {
        const { dto, access_token } = payload;
        return this.employeeService.addEmployee(dto);
    }

    @MessagePattern('editemployee')
    async editEmployee(@Body() payload: any) {
        const { id, dto, access_token } = payload;
        return this.employeeService.editEmployee(id, dto);
    }
    
    @MessagePattern('deleteemployee')
    async deleteEmployee(@Body() payload: any) {
        const { id, access_token } = payload;
        return this.employeeService.deleteEmployee(id);
    }
}
