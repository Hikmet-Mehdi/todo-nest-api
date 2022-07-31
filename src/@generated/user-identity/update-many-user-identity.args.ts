import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityUpdateManyMutationInput } from './user-identity-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserIdentityWhereInput } from './user-identity-where.input';

@ArgsType()
export class UpdateManyUserIdentityArgs {
  @Field(() => UserIdentityUpdateManyMutationInput, { nullable: false })
  @Type(() => UserIdentityUpdateManyMutationInput)
  data!: UserIdentityUpdateManyMutationInput;

  @Field(() => UserIdentityWhereInput, { nullable: true })
  @Type(() => UserIdentityWhereInput)
  where?: UserIdentityWhereInput;
}
