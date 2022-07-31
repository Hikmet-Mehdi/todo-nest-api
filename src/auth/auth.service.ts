import { Injectable } from '@nestjs/common';
import { UserAccount } from '../@generated';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne({ email });
  }

  async findUserIdentity() {}
}
