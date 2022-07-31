import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountWhereInput } from './user-account-where.input';
import { Type } from 'class-transformer';
import { UserAccountOrderByWithRelationInput } from './user-account-order-by-with-relation.input';
import { UserAccountWhereUniqueInput } from './user-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAccountCountAggregateInput } from './user-account-count-aggregate.input';
import { UserAccountMinAggregateInput } from './user-account-min-aggregate.input';
import { UserAccountMaxAggregateInput } from './user-account-max-aggregate.input';

@ArgsType()
export class UserAccountAggregateArgs {
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

  @Field(() => UserAccountCountAggregateInput, { nullable: true })
  _count?: UserAccountCountAggregateInput;

  @Field(() => UserAccountMinAggregateInput, { nullable: true })
  _min?: UserAccountMinAggregateInput;

  @Field(() => UserAccountMaxAggregateInput, { nullable: true })
  _max?: UserAccountMaxAggregateInput;
}
