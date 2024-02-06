import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { ErfassenModule } from './erfassen/erfassen.module';
import { BriefModule } from './briefe/brief.module';
import { PaketModule } from './pakete/paket.module';
import { BegruessungModule } from './begruessung/begruessung.module';
import { UpdateModule } from './updates/update.module';
import { FeedbackModule } from './feedbacks/feedback.module';
import { DokumentModule } from './dokumente/dokument.module';
import { TeamMemberModule } from './teamMembers/teammember.module';

@Module({
  imports: [
    UserModule,
    ErfassenModule,
    BriefModule,
    PaketModule,
    BegruessungModule,
    UpdateModule,
    DokumentModule,
    FeedbackModule,
    TeamMemberModule,
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