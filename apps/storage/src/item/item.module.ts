import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { UnitModule } from './../unit/unit.module'; 

@Module({
    controllers: [ItemController],
    providers: [ItemService],
    imports: [UnitModule],
})
export class ItemModule {}
