import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserAccountWhereInput {

    @Field(() => [UserAccountWhereInput], {nullable:true})
    AND?: Array<UserAccountWhereInput>;

    @Field(() => [UserAccountWhereInput], {nullable:true})
    OR?: Array<UserAccountWhereInput>;

    @Field(() => [UserAccountWhereInput], {nullable:true})
    NOT?: Array<UserAccountWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uuid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;
}
