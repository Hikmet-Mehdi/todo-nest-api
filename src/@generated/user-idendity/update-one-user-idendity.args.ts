import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityUpdateInput } from './user-idendity-update.input';
import { Type } from 'class-transformer';
import { UserIdendityWhereUniqueInput } from './user-idendity-where-unique.input';

@ArgsType()
export class UpdateOneUserIdendityArgs {

    @Field(() => UserIdendityUpdateInput, {nullable:false})
    @Type(() => UserIdendityUpdateInput)
    data!: UserIdendityUpdateInput;

    @Field(() => UserIdendityWhereUniqueInput, {nullable:false})
    @Type(() => UserIdendityWhereUniqueInput)
    where!: UserIdendityWhereUniqueInput;
}
