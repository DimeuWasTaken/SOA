import { BadRequestException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { ItemDto } from '../../../../dto';
import { Item } from '@prisma/client';
import { UnitService } from './../unit/unit.service';
import { UnitDto } from '../../../../dto';

@Injectable()
export class ItemService {
    constructor(
        private prisma: PrismaService,
        private unitService: UnitService
    ) {}

    async getItem(id: number): Promise<Item> {
        id = parseInt(id.toString());
        const item = await this.prisma.item.findUnique({
            where: { id }
        });
        return item;
    }

    async addItem(dto: ItemDto): Promise<Item> {
        const unit = await this.unitService.getUnit(dto.unitId);

        const unitDto: UnitDto = {
            weightCapacity: unit.weightCapacity - dto.weight,
            storageId: unit.storageId,
            userId: unit.userId,
            itemsIds: []
        }

        if (unitDto.weightCapacity < 0) {
            throw new BadRequestException();
        }

        dto.weight = parseFloat(dto.weight.toString());
        dto.unitId = parseInt(dto.unitId.toString());
        const item = await this.prisma.item.create({
            data: {
                name: dto.name,
                weight: dto.weight,
                unit: {
                    connect: { id: dto.unitId }
                }
            },
        });

        unitDto.itemsIds = [...unit.itemsIds, item.id];

        await this.unitService.editUnit(dto.unitId, unitDto);
        return item;
    }

    async editItem(id: number, dto: ItemDto): Promise<Item> {

        const unit = await this.unitService.getUnit(dto.unitId);

        id = parseInt(id.toString());
        dto.weight = parseFloat(dto.weight.toString());
        dto.unitId = parseInt(dto.unitId.toString());

        if (unit.weightCapacity < dto.weight) {
            throw new BadRequestException();
        }

        let item;
        try {
            item = await this.prisma.item.update({
                where: { id },
                data: {
                    name: dto.name,
                    weight: dto.weight,
                    unit: {
                        connect: { id: dto.unitId }
                    }
                },
            });
        } catch (error) {
            throw new NotFoundException();
        }
        return item;
    }

    async deleteItem(id: number) {
        id = parseInt(id.toString());
        const item = await this.prisma.item.delete({
            where: { id }
        });
        return item;
    }
}
