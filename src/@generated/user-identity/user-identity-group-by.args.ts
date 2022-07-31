import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityWhereInput } from './user-identity-where.input';
import { Type } from 'class-transformer';
import { UserIdentityOrderByWithAggregationInput } from './user-identity-order-by-with-aggregation.input';
import { UserIdentityScalarFieldEnum } from './user-identity-scalar-field.enum';
import { UserIdentityScalarWhereWithAggregatesInput } from './user-identity-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserIdentityCountAggregateInput } from './user-identity-count-aggregate.input';
import { UserIdentityMinAggregateInput } from './user-identity-min-aggregate.input';
import { UserIdentityMaxAggregateInput } from './user-identity-max-aggregate.input';

@ArgsType()
export class UserIdentityGroupByArgs {

    @Field(() => UserIdentityWhereInput, {nullable:true})
    @Type(() => UserIdentityWhereInput)
    where?: UserIdentityWhereInput;

    @Field(() => [UserIdentityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserIdentityOrderByWithAggregationInput>;

    @Field(() => [UserIdentityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserIdentityScalarFieldEnum>;

    @Field(() => UserIdentityScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserIdentityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserIdentityCountAggregateInput, {nullable:true})
    _count?: UserIdentityCountAggregateInput;

    @Field(() => UserIdentityMinAggregateInput, {nullable:true})
    _min?: UserIdentityMinAggregateInput;

    @Field(() => UserIdentityMaxAggregateInput, {nullable:true})
    _max?: UserIdentityMaxAggregateInput;
}
