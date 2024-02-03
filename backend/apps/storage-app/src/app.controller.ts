import { Body, Controller, Delete, Get, Headers, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthDto, EmployeeDto, ItemDto, LoginDto, StorageDto, UnitDto } from 'dto';

@Controller()
export class AppController {
    access_token: string;
    constructor(private readonly appService: AppService) {
        this.access_token = ""
    }

    @Post('signup')
    async signup(@Body() dto: AuthDto) {
        const t = await this.appService.signup(dto);
        return t;
    }

    @Post('signin')
    async signin(@Body() dto: LoginDto) {
        const t = await this.appService.signin(dto);
        return t;
    }

    // ------------------------------------------- profile -------------------------------------------

    @Post('addprofile')
    async addProfile(@Body() dto: AuthDto) {
        const t = await this.appService.addProfile(dto, this.access_token);
        return t;
    }

    @Get('getprofile/:id')
    async getProfile(@Param('id') id: number){
        const t = await this.appService.getProfile(id, this.access_token);
        return t;
    }

    @Put('editprofile/:id')
    async editProfile(@Param('id') id: number, @Body() dto: AuthDto) {
        const t = await this.appService.editProfile(id, dto, this.access_token);
        return t;
    }

    @Delete('deleteprofile/:id')
    async deleteProfile(@Param('id') id: number) {
        const t = await this.appService.deleteProfile(id, this.access_token);
        return t;
    }

    // --------------------------------------------- user ---------------------------------------------

    @Post('adduser')
    async addUser(@Body() dto: AuthDto) {
        const t = await this.appService.addUser(dto, this.access_token);
        return t;
    }

    @Get('getuser/:id')
    async getUser(@Param('id') id: number){
        const t = await this.appService.getUser(id, this.access_token);
        return t;
    }

    @Put('edituser/:id')
    async editUser(@Param('id') id: number, @Body() dto: AuthDto) {
        const t = await this.appService.editUser(id, dto, this.access_token);
        return t;
    }

    @Delete('deleteuser/:id')
    async deleteUser(@Param('id') id: number) {
        const t = await this.appService.deleteUser(id, this.access_token);
        return t;
    }

    // --------------------------------------------- employee ---------------------------------------------

    @Post('addemployee')
    async addEmployee(@Body() dto: EmployeeDto) {
        const t = await this.appService.addEmployee(dto, this.access_token);
        return t;
    }

    @Get('getemployee/:id')
    async getEmployee(@Param('id') id: number){
        const t = await this.appService.getEmployee(id, this.access_token);
        return t;
    }

    @Put('editemployee/:id')
    async editEmployee(@Param('id') id: number, @Body() dto: EmployeeDto) {
        const t = await this.appService.editEmployee(id, dto, this.access_token);
        return t;
    }

    @Delete('deleteemployee/:id')
    async deleteEmployee(@Param('id') id: number) {
        const t = await this.appService.deleteEmployee(id, this.access_token);
        return t;
    }

    // --------------------------------------------- storage ---------------------------------------------

    @Post('addstorage')
    async addStorage(@Body() dto: StorageDto) {
        const t = await this.appService.addStorage(dto, this.access_token);
        return t;
    }

    @Get('getstorage/:id')
    async getStorage(@Param('id') id: number){
        const t = await this.appService.getStorage(id, this.access_token);
        return t;
    }

    @Put('editstorage/:id')
    async editStorage(@Param('id') id: number, @Body() dto: StorageDto) {
        const t = await this.appService.editStorage(id, dto, this.access_token);
        return t;
    }

    @Delete('deletestorage/:id')
    async deleteStorage(@Param('id') id: number) {
        const t = await this.appService.deleteStorage(id, this.access_token);
        return t;
    }

    // ---------------------------------------------- unit ----------------------------------------------

    @Post('addunit')
    async addUnit(@Body() dto: UnitDto) {
        const t = await this.appService.addUnit(dto, this.access_token);
        return t;
    }

    @Get('getunit/:id')
    async getUnit(@Param('id') id: number){
        const t = await this.appService.getUnit(id, this.access_token);
        return t;
    }

    @Put('editunit/:id')
    async editUnit(@Param('id') id: number, @Body() dto: UnitDto) {
        const t = await this.appService.editUnit(id, dto, this.access_token);
        return t;
    }

    @Delete('deleteunit/:id')
    async deleteUnit(@Param('id') id: number) {
        const t = await this.appService.deleteUnit(id, this.access_token);
        return t;
    }

    // ----------------------------------------------- item -----------------------------------------------

    @Post('additem')
    async addItem(@Body() dto: ItemDto) {
        const t = await this.appService.addItem(dto, this.access_token);
        return t;
    }

    @Get('getitem/:id')
    async getItem(@Param('id') id: number){
        const t = await this.appService.getItem(id, this.access_token);
        return t;
    }

    @Put('edititem/:id')
    async editItem(@Param('id') id: number, @Body() dto: ItemDto) {
        const t = await this.appService.editItem(id, dto, this.access_token);
        return t;
    }

    @Delete('deleteitem/:id')
    async deleteItem(@Param('id') id: number) {
        const t = await this.appService.deleteItem(id, this.access_token);
        return t;
    }
}
