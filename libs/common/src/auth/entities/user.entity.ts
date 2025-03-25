import { ApiProperty } from '@nestjs/swagger';
// import { Role } from "@prisma/client";
import { Address } from './address.entity';

export class User {
    @ApiProperty()
    id: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password?: string;

    @ApiProperty()
    harshedRt?: string | null;

    // @ApiProperty()
    // role: Role

    // @ApiProperty()
    // address: Address
}
