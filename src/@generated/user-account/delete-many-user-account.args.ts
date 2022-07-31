import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountWhereInput } from './user-account-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserAccountArgs {

    @Field(() => UserAccountWhereInput, {nullable:true})
    @Type(() => UserAccountWhereInput)
    where?: UserAccountWhereInput;
}
