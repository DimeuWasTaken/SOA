import { Module } from '@nestjs/common';
import { StorageModule } from './storage/storage.module';
import { PrismaModule } from './prisma/prisma.module';
import { UnitModule } from './unit/unit.module';
import { ItemModule } from './item/item.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    StorageModule, 
    PrismaModule, 
    UnitModule, 
    ItemModule]
})
export class StorageServiceModule {}
