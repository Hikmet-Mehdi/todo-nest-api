import { Injectable } from '@nestjs/common';
import { UserAccount, UserAccountWhereUniqueInput } from '../@generated';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne({
    uuid,
    email,
  }: UserAccountWhereUniqueInput): Promise<UserAccount> {
    return this.prisma.userAccount.findFirstOrThrow({
      where: {
        OR: [{ email }, { uuid }],
      },
    });
  }
}
