import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityWhereUniqueInput } from './user-idendity-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserIdendityArgs {

    @Field(() => UserIdendityWhereUniqueInput, {nullable:false})
    @Type(() => UserIdendityWhereUniqueInput)
    where!: UserIdendityWhereUniqueInput;
}
