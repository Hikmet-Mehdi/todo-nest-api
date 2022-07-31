import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountWhereUniqueInput } from './user-account-where-unique.input';
import { Type } from 'class-transformer';
import { UserAccountCreateInput } from './user-account-create.input';
import { UserAccountUpdateInput } from './user-account-update.input';

@ArgsType()
export class UpsertOneUserAccountArgs {

    @Field(() => UserAccountWhereUniqueInput, {nullable:false})
    @Type(() => UserAccountWhereUniqueInput)
    where!: UserAccountWhereUniqueInput;

    @Field(() => UserAccountCreateInput, {nullable:false})
    @Type(() => UserAccountCreateInput)
    create!: UserAccountCreateInput;

    @Field(() => UserAccountUpdateInput, {nullable:false})
    @Type(() => UserAccountUpdateInput)
    update!: UserAccountUpdateInput;
}
