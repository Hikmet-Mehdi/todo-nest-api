import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserAccountScalarWhereWithAggregatesInput {
  @Field(() => [UserAccountScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserAccountScalarWhereWithAggregatesInput>;

  @Field(() => [UserAccountScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserAccountScalarWhereWithAggregatesInput>;

  @Field(() => [UserAccountScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserAccountScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  uuid?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  firstName?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  lastName?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter;
}
