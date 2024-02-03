import { Type } from "class-transformer";
import { IsDecimal, IsNotEmpty, IsOptional, IsPositive } from "class-validator";
import { Item, Storage } from "@prisma/client";

export class UnitDto {
    @IsDecimal()
    @IsNotEmpty()
    weightCapacity: number;

    @IsNotEmpty()
    storageId: number;

    @IsOptional()
    userId: number;

    @IsOptional()
    itemsIds: number[];
}