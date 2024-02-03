import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';
import { EmployeeDto } from '../../../../dto';

@Injectable()
export class EmployeeService {
    constructor(private prisma: PrismaService) {}

    async getEmployee(id: number): Promise<Employee> {
        id = parseInt(id.toString());
        const employee = await this.prisma.employee.findUnique({ where: { id } });
        return employee;
    }

    async addEmployee(dto: EmployeeDto): Promise<Employee> {
        dto.profileId = parseInt(dto.profileId.toString());
        if (dto.managerId) {
            dto.managerId = parseInt(dto.managerId.toString());
            return this.prisma.employee.create({ 
                data: {
                    employmentDate: dto.employmentDate,
                    profile:{
                        connect: {
                            id: dto.profileId
                        }
                    },
                    manager: {
                        connect: {
                            id: dto.managerId
                        }
                    },
                }
            });
        } else {
            return this.prisma.employee.create({ 
                data: {
                    employmentDate: dto.employmentDate,
                    profileId: dto.profileId,
                }
            });
        }
    }

    async editEmployee(id: number, dto: EmployeeDto): Promise<Employee> {
        id = parseInt(id.toString());
        const employee = await this.prisma.employee.update({
            where: { id },
            data: {
                employmentDate: dto.employmentDate,
                managerId: dto.managerId,
            }
        });
        return employee;
    }

    async deleteEmployee(id: number): Promise<Employee> {
        id = parseInt(id.toString());
        const employee = await this.prisma.employee.delete({ where: { id } });
        return employee;
    }
}
