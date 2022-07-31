import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserIdendityWhereUniqueInput {

    @Field(() => String, {nullable:true})
    uuid?: string;

    @Field(() => String, {nullable:true})
    email?: string;
}
