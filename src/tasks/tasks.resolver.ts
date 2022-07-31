import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import {
  TaskCreateInput,
  Task,
  TaskUpdateInput,
  TaskWhereUniqueInput,
} from '../@generated';

@Resolver('Task')
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation((returns) => Task, { name: 'createTask' })
  async createTask(@Args('taskCreateInput') taskCreateInput: TaskCreateInput) {
    return this.tasksService.create(taskCreateInput);
  }

  @Query((returns) => [Task], { name: 'getTasks' })
  async getTasks() {
    return this.tasksService.findAll();
  }

  @Query((returns) => Task, { name: 'getTask' })
  async getTask(@Args('where') where: TaskWhereUniqueInput) {
    return this.tasksService.findOne(where);
  }

  @Mutation((returns) => Task, { name: 'updateTask' })
  async updateTask(
    @Args('data') data: TaskUpdateInput,
    @Args('where') where: TaskWhereUniqueInput,
  ) {
    return this.tasksService.update(where, data);
  }

  @Mutation((returns) => Task, { name: 'deleteTask' })
  async removeTask(@Args('where') where: TaskWhereUniqueInput): Promise<Task> {
    return this.tasksService.remove(where);
  }
}
