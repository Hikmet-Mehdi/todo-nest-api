import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountWhereInput } from './user-account-where.input';
import { Type } from 'class-transformer';
import { UserAccountOrderByWithAggregationInput } from './user-account-order-by-with-aggregation.input';
import { UserAccountScalarFieldEnum } from './user-account-scalar-field.enum';
import { UserAccountScalarWhereWithAggregatesInput } from './user-account-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserAccountCountAggregateInput } from './user-account-count-aggregate.input';
import { UserAccountMinAggregateInput } from './user-account-min-aggregate.input';
import { UserAccountMaxAggregateInput } from './user-account-max-aggregate.input';

@ArgsType()
export class UserAccountGroupByArgs {

    @Field(() => UserAccountWhereInput, {nullable:true})
    @Type(() => UserAccountWhereInput)
    where?: UserAccountWhereInput;

    @Field(() => [UserAccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserAccountOrderByWithAggregationInput>;

    @Field(() => [UserAccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserAccountScalarFieldEnum>;

    @Field(() => UserAccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserAccountScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserAccountCountAggregateInput, {nullable:true})
    _count?: UserAccountCountAggregateInput;

    @Field(() => UserAccountMinAggregateInput, {nullable:true})
    _min?: UserAccountMinAggregateInput;

    @Field(() => UserAccountMaxAggregateInput, {nullable:true})
    _max?: UserAccountMaxAggregateInput;
}
