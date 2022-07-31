import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountWhereUniqueInput } from './user-account-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserAccountArgs {
  @Field(() => UserAccountWhereUniqueInput, { nullable: false })
  @Type(() => UserAccountWhereUniqueInput)
  where!: UserAccountWhereUniqueInput;
}
