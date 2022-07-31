import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityWhereUniqueInput } from './user-idendity-where-unique.input';
import { Type } from 'class-transformer';
import { UserIdendityCreateInput } from './user-idendity-create.input';
import { UserIdendityUpdateInput } from './user-idendity-update.input';

@ArgsType()
export class UpsertOneUserIdendityArgs {

    @Field(() => UserIdendityWhereUniqueInput, {nullable:false})
    @Type(() => UserIdendityWhereUniqueInput)
    where!: UserIdendityWhereUniqueInput;

    @Field(() => UserIdendityCreateInput, {nullable:false})
    @Type(() => UserIdendityCreateInput)
    create!: UserIdendityCreateInput;

    @Field(() => UserIdendityUpdateInput, {nullable:false})
    @Type(() => UserIdendityUpdateInput)
    update!: UserIdendityUpdateInput;
}
