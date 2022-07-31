import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserAccountCountAggregate } from './user-account-count-aggregate.output';
import { UserAccountMinAggregate } from './user-account-min-aggregate.output';
import { UserAccountMaxAggregate } from './user-account-max-aggregate.output';

@ObjectType()
export class UserAccountGroupBy {

    @Field(() => String, {nullable:false})
    uuid!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => UserAccountCountAggregate, {nullable:true})
    _count?: UserAccountCountAggregate;

    @Field(() => UserAccountMinAggregate, {nullable:true})
    _min?: UserAccountMinAggregate;

    @Field(() => UserAccountMaxAggregate, {nullable:true})
    _max?: UserAccountMaxAggregate;
}
