import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityUpdateInput } from './user-identity-update.input';
import { Type } from 'class-transformer';
import { UserIdentityWhereUniqueInput } from './user-identity-where-unique.input';

@ArgsType()
export class UpdateOneUserIdentityArgs {
  @Field(() => UserIdentityUpdateInput, { nullable: false })
  @Type(() => UserIdentityUpdateInput)
  data!: UserIdentityUpdateInput;

  @Field(() => UserIdentityWhereUniqueInput, { nullable: false })
  @Type(() => UserIdentityWhereUniqueInput)
  where!: UserIdentityWhereUniqueInput;
}
