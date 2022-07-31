import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityWhereInput } from './user-idendity-where.input';
import { Type } from 'class-transformer';
import { UserIdendityOrderByWithRelationInput } from './user-idendity-order-by-with-relation.input';
import { UserIdendityWhereUniqueInput } from './user-idendity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserIdendityScalarFieldEnum } from './user-idendity-scalar-field.enum';

@ArgsType()
export class FindManyUserIdendityArgs {

    @Field(() => UserIdendityWhereInput, {nullable:true})
    @Type(() => UserIdendityWhereInput)
    where?: UserIdendityWhereInput;

    @Field(() => [UserIdendityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserIdendityOrderByWithRelationInput>;

    @Field(() => UserIdendityWhereUniqueInput, {nullable:true})
    cursor?: UserIdendityWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserIdendityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserIdendityScalarFieldEnum>;
}
