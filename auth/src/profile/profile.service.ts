import { Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileDto } from './dto';

@Injectable()
export class ProfileService {

    constructor(private prisma: PrismaService){}

    async getAllProfiles(): Promise<Profile[]> {
        const profiles = await this.prisma.profile.findMany();
        return profiles.map(profile => {
            delete profile.password;
            return profile;
        });
    }

    async getProfile(id: number): Promise<Profile> {
        const profile = await this.prisma.profile.findUnique({ where: { id } });
        delete profile.password;
        return profile;
    }

    async updateProfile(dto: ProfileDto) {
        const profile = await this.prisma.profile.update({ where: { email: dto.email }, data: dto });
        delete profile.password;
        return profile;
        
    }
}
