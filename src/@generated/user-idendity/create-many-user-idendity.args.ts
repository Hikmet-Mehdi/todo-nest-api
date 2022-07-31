import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserIdendityCreateManyInput } from './user-idendity-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserIdendityArgs {

    @Field(() => [UserIdendityCreateManyInput], {nullable:false})
    @Type(() => UserIdendityCreateManyInput)
    data!: Array<UserIdendityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
