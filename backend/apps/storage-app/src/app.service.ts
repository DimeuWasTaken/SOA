import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthDto, EmployeeDto, ItemDto, LoginDto, StorageDto, UnitDto } from 'dto';

@Injectable()
export class AppService {
    constructor(
        @Inject('AUTH') private readonly authClient: ClientProxy,
        @Inject('EMPLOYEE') private readonly employeeClient: ClientProxy,
        @Inject('STORAGE') private readonly storageClient: ClientProxy,
    ) {}


    async signup(dto: AuthDto) {
        return await this.authClient.send('signup', dto);
    }

    async signin(dto: LoginDto) {
        return await this.authClient.send('signin', dto);
    }

    // ------------------------------------------- profile -------------------------------------------

    async addProfile(dto: AuthDto, access_token: string) {
        return await this.authClient.send('addprofile', {dto, access_token});
    }

    async getProfile(id: number, access_token: string) {
        return await this.authClient.send('getprofile', {id, access_token});
    }

    async editProfile(id: number, dto: AuthDto, access_token: string) {
        return await this.authClient.send('editprofile', {id, dto, access_token});
    }

    async deleteProfile(id: number, access_token: string) {
        return await this.authClient.send('deleteprofile', {id, access_token});
    }

    // --------------------------------------------- user ---------------------------------------------

    async addUser(dto: AuthDto, access_token: string) {
        return await this.authClient.send('adduser', {dto, access_token});
    }

    async getUser(id: number, access_token: string) {
        return await this.authClient.send('getuser', {id, access_token});
    }

    async editUser(id: number, dto: AuthDto, access_token: string) {
        return await this.authClient.send('edituser', {id, dto, access_token});
    }

    async deleteUser(id: number, access_token: string) {
        return await this.authClient.send('deleteuser', {id, access_token});
    }

    // --------------------------------------------- employee ---------------------------------------------

    async addEmployee(dto: EmployeeDto, access_token: string) {
        return await this.employeeClient.send('addemployee', {dto, access_token});
    }

    async getEmployee(id: number, access_token: string) {
        return await this.employeeClient.send('getemployee', {id, access_token});
    }

    async editEmployee(id: number, dto: EmployeeDto, access_token: string) {
        return await this.employeeClient.send('editemployee', {id, dto, access_token});
    }

    async deleteEmployee(id: number, access_token: string) {
        return await this.employeeClient.send('deleteemployee', {id, access_token});
    }
    
    // -------------------------------------------- storage --------------------------------------------

    async addStorage(dto: StorageDto, access_token: string) {
        return await this.storageClient.send('addstorage', {dto, access_token});
    }

    async getStorage(id: number, access_token: string) {
        return await this.storageClient.send('getstorage', {id, access_token});
    }

    async editStorage(id: number, dto: StorageDto, access_token: string) {
        return await this.storageClient.send('editstorage', {id, dto, access_token});
    }

    async deleteStorage(id: number, access_token: string) {
        return await this.storageClient.send('deletestorage', {id, access_token});
    }

    // ---------------------------------------------- unit ----------------------------------------------

    async addUnit(dto: UnitDto, access_token: string) {
        return await this.storageClient.send('addunit', {dto, access_token});
    }

    async getUnit(id: number, access_token: string) {
        return await this.storageClient.send('getunit', {id, access_token});
    }

    async editUnit(id: number, dto: UnitDto, access_token: string) {
        return await this.storageClient.send('editunit', {id, dto, access_token});
    }

    async deleteUnit(id: number, access_token: string) {
        return await this.storageClient.send('deleteunit', {id, access_token});
    }

    // ---------------------------------------------- item ----------------------------------------------

    async addItem(dto: ItemDto, access_token: string) {
        return await this.storageClient.send('additem', {dto, access_token});
    }

    async getItem(id: number, access_token: string) {
        return await this.storageClient.send('getitem', {id, access_token});
    }

    async editItem(id: number, dto: ItemDto, access_token: string) {
        return await this.storageClient.send('edititem', {id, dto, access_token});
    }

    async deleteItem(id: number, access_token: string) {
        return await this.storageClient.send('deleteitem', {id, access_token});
    }
}
