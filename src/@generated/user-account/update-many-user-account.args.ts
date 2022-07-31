import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountUpdateManyMutationInput } from './user-account-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserAccountWhereInput } from './user-account-where.input';

@ArgsType()
export class UpdateManyUserAccountArgs {

    @Field(() => UserAccountUpdateManyMutationInput, {nullable:false})
    @Type(() => UserAccountUpdateManyMutationInput)
    data!: UserAccountUpdateManyMutationInput;

    @Field(() => UserAccountWhereInput, {nullable:true})
    @Type(() => UserAccountWhereInput)
    where?: UserAccountWhereInput;
}
