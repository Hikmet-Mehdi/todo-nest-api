import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserIdentityCountOrderByAggregateInput } from './user-identity-count-order-by-aggregate.input';
import { UserIdentityMaxOrderByAggregateInput } from './user-identity-max-order-by-aggregate.input';
import { UserIdentityMinOrderByAggregateInput } from './user-identity-min-order-by-aggregate.input';

@InputType()
export class UserIdentityOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  uuid?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => UserIdentityCountOrderByAggregateInput, { nullable: true })
  _count?: UserIdentityCountOrderByAggregateInput;

  @Field(() => UserIdentityMaxOrderByAggregateInput, { nullable: true })
  _max?: UserIdentityMaxOrderByAggregateInput;

  @Field(() => UserIdentityMinOrderByAggregateInput, { nullable: true })
  _min?: UserIdentityMinOrderByAggregateInput;
}
