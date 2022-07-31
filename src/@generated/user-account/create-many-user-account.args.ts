import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountCreateManyInput } from './user-account-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserAccountArgs {

    @Field(() => [UserAccountCreateManyInput], {nullable:false})
    @Type(() => UserAccountCreateManyInput)
    data!: Array<UserAccountCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
