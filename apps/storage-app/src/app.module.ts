import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([
        {
            name: 'AUTH',
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'auth_queue',
                queueOptions: {
                    durable: false,
                },
            }
        },
        {
            name: 'EMPLOYEE',
            transport: Transport.REDIS,
            options: {
                host: 'localhost',
                port: 6379
            }
        },
        {
            

            name: 'STORAGE',
            /* transport: Transport.KAFKA,
            options: {
                client: {
                    clientId: 'storage',
                    brokers: ['localhost:9092'],
                },
                consumer: {
                    groupId: 'storage-consumer'
                }
            } */
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 8000
            }
        }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
