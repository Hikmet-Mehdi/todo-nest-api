import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAccountUpdateInput } from './user-account-update.input';
import { Type } from 'class-transformer';
import { UserAccountWhereUniqueInput } from './user-account-where-unique.input';

@ArgsType()
export class UpdateOneUserAccountArgs {
  @Field(() => UserAccountUpdateInput, { nullable: false })
  @Type(() => UserAccountUpdateInput)
  data!: UserAccountUpdateInput;

  @Field(() => UserAccountWhereUniqueInput, { nullable: false })
  @Type(() => UserAccountWhereUniqueInput)
  where!: UserAccountWhereUniqueInput;
}
