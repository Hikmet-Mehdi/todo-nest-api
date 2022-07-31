import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdentityCreateManyInput } from './user-identity-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserIdentityArgs {

    @Field(() => [UserIdentityCreateManyInput], {nullable:false})
    @Type(() => UserIdentityCreateManyInput)
    data!: Array<UserIdentityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
