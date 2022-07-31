import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityWhereInput } from './user-idendity-where.input';
import { Type } from 'class-transformer';
import { UserIdendityOrderByWithRelationInput } from './user-idendity-order-by-with-relation.input';
import { UserIdendityWhereUniqueInput } from './user-idendity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserIdendityCountAggregateInput } from './user-idendity-count-aggregate.input';
import { UserIdendityMinAggregateInput } from './user-idendity-min-aggregate.input';
import { UserIdendityMaxAggregateInput } from './user-idendity-max-aggregate.input';

@ArgsType()
export class UserIdendityAggregateArgs {

    @Field(() => UserIdendityWhereInput, {nullable:true})
    @Type(() => UserIdendityWhereInput)
    where?: UserIdendityWhereInput;

    @Field(() => [UserIdendityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserIdendityOrderByWithRelationInput>;

    @Field(() => UserIdendityWhereUniqueInput, {nullable:true})
    cursor?: UserIdendityWhereUniqueInput;

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
