import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityCreateInput } from './user-idendity-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserIdendityArgs {

    @Field(() => UserIdendityCreateInput, {nullable:false})
    @Type(() => UserIdendityCreateInput)
    data!: UserIdendityCreateInput;
}
