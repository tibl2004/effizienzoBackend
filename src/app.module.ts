// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'; // Hier wird das UserModule importiert

@Module({
  imports: [UserModule], // Fügen Sie das importierte UserModule hier hinzu
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
