import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserAccountCountOrderByAggregateInput } from './user-account-count-order-by-aggregate.input';
import { UserAccountMaxOrderByAggregateInput } from './user-account-max-order-by-aggregate.input';
import { UserAccountMinOrderByAggregateInput } from './user-account-min-order-by-aggregate.input';

@InputType()
export class UserAccountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    uuid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => UserAccountCountOrderByAggregateInput, {nullable:true})
    _count?: UserAccountCountOrderByAggregateInput;

    @Field(() => UserAccountMaxOrderByAggregateInput, {nullable:true})
    _max?: UserAccountMaxOrderByAggregateInput;

    @Field(() => UserAccountMinOrderByAggregateInput, {nullable:true})
    _min?: UserAccountMinOrderByAggregateInput;
}
