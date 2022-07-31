import { registerEnumType } from '@nestjs/graphql';

export enum UserIdendityScalarFieldEnum {
    uuid = "uuid",
    email = "email",
    password = "password"
}


registerEnumType(UserIdendityScalarFieldEnum, { name: 'UserIdendityScalarFieldEnum', description: undefined })
