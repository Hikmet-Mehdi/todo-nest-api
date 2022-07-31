import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserIdentityCountAggregate } from './user-identity-count-aggregate.output';
import { UserIdentityMinAggregate } from './user-identity-min-aggregate.output';
import { UserIdentityMaxAggregate } from './user-identity-max-aggregate.output';

@ObjectType()
export class UserIdentityGroupBy {
  @Field(() => String, { nullable: false })
  uuid!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => UserIdentityCountAggregate, { nullable: true })
  _count?: UserIdentityCountAggregate;

  @Field(() => UserIdentityMinAggregate, { nullable: true })
  _min?: UserIdentityMinAggregate;

  @Field(() => UserIdentityMaxAggregate, { nullable: true })
  _max?: UserIdentityMaxAggregate;
}
