import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityWhereInput } from './user-identity-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserIdentityArgs {
  @Field(() => UserIdentityWhereInput, { nullable: true })
  @Type(() => UserIdentityWhereInput)
  where?: UserIdentityWhereInput;
}
