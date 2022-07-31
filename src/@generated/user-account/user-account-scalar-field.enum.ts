import { registerEnumType } from '@nestjs/graphql';

export enum UserAccountScalarFieldEnum {
  uuid = 'uuid',
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
}

registerEnumType(UserAccountScalarFieldEnum, {
  name: 'UserAccountScalarFieldEnum',
  description: undefined,
});
