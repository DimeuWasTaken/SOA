import { Body, Controller,  Delete,  Get, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetProfile } from '../auth/decorator';
import { ProfileService } from './profile.service';
import { ProfileDto } from './dto';


@UseGuards(JwtGuard)
@Controller('profiles')
export class ProfileController {

    constructor(private profileService: ProfileService){}

    @Get('getprofile/:id')
    async getProfile(@GetProfile('id') id: number) {
        return this.profileService.getProfile(id);
    }

    @Put('editprofile/:id')
    async updateProfile(@GetProfile('id') id: number, @Body() dto: ProfileDto) {
        return this.profileService.updateProfile(id, dto);
    }

    @Delete('deleteprofile/:id')
    async deleteProfile(@GetProfile('id') id: number) {
        return this.profileService.deleteProfile(id);
    }
}
