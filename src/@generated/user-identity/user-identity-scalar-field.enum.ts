import { registerEnumType } from '@nestjs/graphql';

export enum UserIdentityScalarFieldEnum {
    uuid = "uuid",
    email = "email",
    password = "password"
}


registerEnumType(UserIdentityScalarFieldEnum, { name: 'UserIdentityScalarFieldEnum', description: undefined })
