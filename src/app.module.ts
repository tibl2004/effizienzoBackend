// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'; // Hier wird das UserModule importiert
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [UserModule], // Fügen Sie das importierte UserModule hier hinzu
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
