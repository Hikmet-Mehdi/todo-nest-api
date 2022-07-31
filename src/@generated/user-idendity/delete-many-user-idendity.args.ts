import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityWhereInput } from './user-idendity-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserIdendityArgs {

    @Field(() => UserIdendityWhereInput, {nullable:true})
    @Type(() => UserIdendityWhereInput)
    where?: UserIdendityWhereInput;
}
