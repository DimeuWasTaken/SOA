import { Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileDto } from './dto';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService){}

    async getProfile(id: number): Promise<Profile> {
        const profile = await this.prisma.profile.findUnique({ where: { id } });
        delete profile.password;
        return profile;
    }

    async updateProfile(id: number, dto: ProfileDto): Promise<Profile> {
        const profile = await this.prisma.profile.update({ where: { id }, data: dto });
        delete profile.password;
        return profile;   
    }

    async deleteProfile(id: number): Promise<Profile> {
        return await this.prisma.profile.delete({ where: { id } });
    }
}
