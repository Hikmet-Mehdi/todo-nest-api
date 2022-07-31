import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserIdentityCountAggregate {
  @Field(() => Int, { nullable: false })
  uuid!: number;

  @Field(() => Int, { nullable: false })
  email!: number;

  @Field(() => Int, { nullable: false })
  password!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
