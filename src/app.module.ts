import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { ErfassenModule } from './erfassen/erfassen.module';
import { BriefModule } from './briefe/brief.module';
import { PaketModule } from './pakete/paket.module';
import { LogModule } from './logs/log.module';
import { BegruessungModule } from './begruessung/begruessung.module';
import { UpdateModule } from './updates/update.module';
import { FeedbackModule } from './feedbacks/feedback.module';

@Module({
  imports: [
    UserModule,
    ErfassenModule,
    BriefModule,
    PaketModule,
    BegruessungModule,
    LogModule,
    UpdateModule,
    FeedbackModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'effizienzo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}