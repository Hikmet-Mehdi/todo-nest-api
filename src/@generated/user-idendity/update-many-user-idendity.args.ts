import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityUpdateManyMutationInput } from './user-idendity-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserIdendityWhereInput } from './user-idendity-where.input';

@ArgsType()
export class UpdateManyUserIdendityArgs {

    @Field(() => UserIdendityUpdateManyMutationInput, {nullable:false})
    @Type(() => UserIdendityUpdateManyMutationInput)
    data!: UserIdendityUpdateManyMutationInput;

    @Field(() => UserIdendityWhereInput, {nullable:true})
    @Type(() => UserIdendityWhereInput)
    where?: UserIdendityWhereInput;
}
