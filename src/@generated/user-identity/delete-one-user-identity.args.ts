import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityWhereUniqueInput } from './user-identity-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserIdentityArgs {
  @Field(() => UserIdentityWhereUniqueInput, { nullable: false })
  @Type(() => UserIdentityWhereUniqueInput)
  where!: UserIdentityWhereUniqueInput;
}
