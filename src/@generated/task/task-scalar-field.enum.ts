import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
  uuid = 'uuid',
  title = 'title',
  description = 'description',
  code = 'code',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(TaskScalarFieldEnum, {
  name: 'TaskScalarFieldEnum',
  description: undefined,
});
