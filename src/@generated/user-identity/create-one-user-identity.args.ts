import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityCreateInput } from './user-identity-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserIdentityArgs {

    @Field(() => UserIdentityCreateInput, {nullable:false})
    @Type(() => UserIdentityCreateInput)
    data!: UserIdentityCreateInput;
}
