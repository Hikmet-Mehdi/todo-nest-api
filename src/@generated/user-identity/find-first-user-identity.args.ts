import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityWhereInput } from './user-identity-where.input';
import { Type } from 'class-transformer';
import { UserIdentityOrderByWithRelationInput } from './user-identity-order-by-with-relation.input';
import { UserIdentityWhereUniqueInput } from './user-identity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserIdentityScalarFieldEnum } from './user-identity-scalar-field.enum';

@ArgsType()
export class FindFirstUserIdentityArgs {
  @Field(() => UserIdentityWhereInput, { nullable: true })
  @Type(() => UserIdentityWhereInput)
  where?: UserIdentityWhereInput;

  @Field(() => [UserIdentityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserIdentityOrderByWithRelationInput>;

  @Field(() => UserIdentityWhereUniqueInput, { nullable: true })
  cursor?: UserIdentityWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserIdentityScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserIdentityScalarFieldEnum>;
}
