import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  TaskCreateInput,
  TaskUpdateInput,
  TaskWhereUniqueInput,
  Task,
} from '../@generated';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskInput: TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data: createTaskInput,
    });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async findOne({ uuid }: TaskWhereUniqueInput): Promise<Task> {
    return this.prisma.task.findFirst({ where: { uuid } });
  }

  async update(
    { uuid }: TaskWhereUniqueInput,
    updateTaskInput: TaskUpdateInput,
  ): Promise<Task> {
    return this.prisma.task.update({ data: updateTaskInput, where: { uuid } });
  }

  async remove({ uuid }: TaskWhereUniqueInput): Promise<Task> {
    return this.prisma.task.delete({ where: { uuid } });
  }
}
