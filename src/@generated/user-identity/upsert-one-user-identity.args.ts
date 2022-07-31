import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityWhereUniqueInput } from './user-identity-where-unique.input';
import { Type } from 'class-transformer';
import { UserIdentityCreateInput } from './user-identity-create.input';
import { UserIdentityUpdateInput } from './user-identity-update.input';

@ArgsType()
export class UpsertOneUserIdentityArgs {
  @Field(() => UserIdentityWhereUniqueInput, { nullable: false })
  @Type(() => UserIdentityWhereUniqueInput)
  where!: UserIdentityWhereUniqueInput;

  @Field(() => UserIdentityCreateInput, { nullable: false })
  @Type(() => UserIdentityCreateInput)
  create!: UserIdentityCreateInput;

  @Field(() => UserIdentityUpdateInput, { nullable: false })
  @Type(() => UserIdentityUpdateInput)
  update!: UserIdentityUpdateInput;
}
