import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserIdendityCountOrderByAggregateInput } from './user-idendity-count-order-by-aggregate.input';
import { UserIdendityMaxOrderByAggregateInput } from './user-idendity-max-order-by-aggregate.input';
import { UserIdendityMinOrderByAggregateInput } from './user-idendity-min-order-by-aggregate.input';

@InputType()
export class UserIdendityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    uuid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => UserIdendityCountOrderByAggregateInput, {nullable:true})
    _count?: UserIdendityCountOrderByAggregateInput;

    @Field(() => UserIdendityMaxOrderByAggregateInput, {nullable:true})
    _max?: UserIdendityMaxOrderByAggregateInput;

    @Field(() => UserIdendityMinOrderByAggregateInput, {nullable:true})
    _min?: UserIdendityMinOrderByAggregateInput;
}
