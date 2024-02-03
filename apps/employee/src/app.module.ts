import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    EmployeeModule, 
    PrismaModule]
})
export class EmployeeServiceModule {}
