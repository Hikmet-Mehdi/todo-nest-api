import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class TaskUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uuid?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
