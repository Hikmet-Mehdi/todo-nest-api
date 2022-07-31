import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserIdentityScalarWhereWithAggregatesInput {

    @Field(() => [UserIdentityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserIdentityScalarWhereWithAggregatesInput>;

    @Field(() => [UserIdentityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserIdentityScalarWhereWithAggregatesInput>;

    @Field(() => [UserIdentityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserIdentityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uuid?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: StringWithAggregatesFilter;
}
