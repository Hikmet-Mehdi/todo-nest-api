import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountWhereInput } from './user-account-where.input';
import { Type } from 'class-transformer';
import { UserAccountOrderByWithRelationInput } from './user-account-order-by-with-relation.input';
import { UserAccountWhereUniqueInput } from './user-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAccountScalarFieldEnum } from './user-account-scalar-field.enum';

@ArgsType()
export class FindManyUserAccountArgs {
  @Field(() => UserAccountWhereInput, { nullable: true })
  @Type(() => UserAccountWhereInput)
  where?: UserAccountWhereInput;

  @Field(() => [UserAccountOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserAccountOrderByWithRelationInput>;

  @Field(() => UserAccountWhereUniqueInput, { nullable: true })
  cursor?: UserAccountWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserAccountScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserAccountScalarFieldEnum>;
}
