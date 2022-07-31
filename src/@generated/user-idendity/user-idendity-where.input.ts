import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserIdendityWhereInput {

    @Field(() => [UserIdendityWhereInput], {nullable:true})
    AND?: Array<UserIdendityWhereInput>;

    @Field(() => [UserIdendityWhereInput], {nullable:true})
    OR?: Array<UserIdendityWhereInput>;

    @Field(() => [UserIdendityWhereInput], {nullable:true})
    NOT?: Array<UserIdendityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uuid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;
}
