import { Body, Controller,  Get, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetProfile } from '../auth/decorator';
import { ProfileService } from './profile.service';
import { ProfileDto } from './dto';


@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {

    constructor(private profileService: ProfileService){}

    @Get('me')
    async getProfile(@GetProfile('id') id: number) {
        return this.profileService.getProfile(id);
    }

    @Put('edit')
    async updateProfile(@Body() dto: ProfileDto) {
        return this.profileService.updateProfile(dto);
    }
}
