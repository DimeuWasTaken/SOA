import { ForbiddenException, Injectable} from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto, LoginDto } from '../../../../dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService, 
        private jwt: JwtService,
        private config: ConfigService) {}

    async signin(dto: LoginDto){
        // find the profile by email

        const profile = await this.prisma.profile.findUnique({
            where: {
                email: dto.email,
            },
        });

        // if profile not found throw exception
        if (!profile) throw new ForbiddenException('Credentials are wrong');

        // compare password
        const pw = await argon.verify(profile.password, dto.password);

        // if password is wrong throw exception
        if (!pw) throw new ForbiddenException('Credentials are wrong');

        // send back the profile
        return this.signToken(profile.id, profile.email);
    }

    async signup(dto: AuthDto){

        try {
            // generate password hash
            const hash = await argon.hash(dto.password);
            // save profile in db
            const profile = await this.prisma.profile.create({
                data: {
                    email: dto.email,
                    password: hash,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                },
            });
            // return profile
            return this.signToken(profile.id, profile.email);
        } catch(error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials already in use');
                }
            } else throw error;
        }
    }

    async signToken(profileId: number, email: string): Promise<{access_token: string}>{
        const payload = { sub: profileId, email };
        const token = await this.jwt.sign(payload, {
            expiresIn: '60m',
            secret: this.config.get('JWT_SECRET'),
        });
        return {
            access_token: token,
        }
    }
}
