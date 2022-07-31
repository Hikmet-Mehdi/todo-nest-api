import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityWhereInput } from './user-idendity-where.input';
import { Type } from 'class-transformer';
import { UserIdendityOrderByWithAggregationInput } from './user-idendity-order-by-with-aggregation.input';
import { UserIdendityScalarFieldEnum } from './user-idendity-scalar-field.enum';
import { UserIdendityScalarWhereWithAggregatesInput } from './user-idendity-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserIdendityCountAggregateInput } from './user-idendity-count-aggregate.input';
import { UserIdendityMinAggregateInput } from './user-idendity-min-aggregate.input';
import { UserIdendityMaxAggregateInput } from './user-idendity-max-aggregate.input';

@ArgsType()
export class UserIdendityGroupByArgs {

    @Field(() => UserIdendityWhereInput, {nullable:true})
    @Type(() => UserIdendityWhereInput)
    where?: UserIdendityWhereInput;

    @Field(() => [UserIdendityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserIdendityOrderByWithAggregationInput>;

    @Field(() => [UserIdendityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserIdendityScalarFieldEnum>;

    @Field(() => UserIdendityScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserIdendityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserIdendityCountAggregateInput, {nullable:true})
    _count?: UserIdendityCountAggregateInput;

    @Field(() => UserIdendityMinAggregateInput, {nullable:true})
    _min?: UserIdendityMinAggregateInput;

    @Field(() => UserIdendityMaxAggregateInput, {nullable:true})
    _max?: UserIdendityMaxAggregateInput;
}
