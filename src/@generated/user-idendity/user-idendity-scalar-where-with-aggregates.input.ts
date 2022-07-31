import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserIdendityScalarWhereWithAggregatesInput {

    @Field(() => [UserIdendityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserIdendityScalarWhereWithAggregatesInput>;

    @Field(() => [UserIdendityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserIdendityScalarWhereWithAggregatesInput>;

    @Field(() => [UserIdendityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserIdendityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uuid?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: StringWithAggregatesFilter;
}
