import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskWhereUniqueInput {
  @Field(() => String, { nullable: false })
  uuid!: string;
}
