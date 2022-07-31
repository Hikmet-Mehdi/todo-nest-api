import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserIdentityWhereInput {
  @Field(() => [UserIdentityWhereInput], { nullable: true })
  AND?: Array<UserIdentityWhereInput>;

  @Field(() => [UserIdentityWhereInput], { nullable: true })
  OR?: Array<UserIdentityWhereInput>;

  @Field(() => [UserIdentityWhereInput], { nullable: true })
  NOT?: Array<UserIdentityWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  uuid?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;
}
