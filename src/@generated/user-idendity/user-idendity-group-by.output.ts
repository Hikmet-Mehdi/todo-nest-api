import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserIdendityCountAggregate } from './user-idendity-count-aggregate.output';
import { UserIdendityMinAggregate } from './user-idendity-min-aggregate.output';
import { UserIdendityMaxAggregate } from './user-idendity-max-aggregate.output';

@ObjectType()
export class UserIdendityGroupBy {

    @Field(() => String, {nullable:false})
    uuid!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserIdendityCountAggregate, {nullable:true})
    _count?: UserIdendityCountAggregate;

    @Field(() => UserIdendityMinAggregate, {nullable:true})
    _min?: UserIdendityMinAggregate;

    @Field(() => UserIdendityMaxAggregate, {nullable:true})
    _max?: UserIdendityMaxAggregate;
}
