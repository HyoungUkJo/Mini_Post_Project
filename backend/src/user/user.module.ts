import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from './user.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProvider],
  exports:[UserService]
})
export class UserModule {}
