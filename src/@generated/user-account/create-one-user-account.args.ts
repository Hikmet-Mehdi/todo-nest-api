import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountCreateInput } from './user-account-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserAccountArgs {
  @Field(() => UserAccountCreateInput, { nullable: false })
  @Type(() => UserAccountCreateInput)
  data!: UserAccountCreateInput;
}
