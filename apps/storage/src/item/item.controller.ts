import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from '../../../../dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('items')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @MessagePattern('additem')
    async addItem(@Body() payload: any) {
        const { dto, access_token } = payload
        return await this.itemService.addItem(dto);
    }

    @MessagePattern('getitem')
    async getItem(@Body() payload: any) {
        const { id, access_token } = payload
        return await this.itemService.getItem(id);
    }

    @MessagePattern('edititem')
    async editItem(@Body() payload: any) {
        const { id, dto, access_token } = payload
        return await this.itemService.editItem(id, dto);
    }

    @MessagePattern('deleteitem')
    async deleteItem(@Body() payload: any) {
        const { id, access_token } = payload
        return await this.itemService.deleteItem(id);
    }
}
