import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AnswerModule } from './answer/answer.module';
import { StatModule } from './stat/stat.module';

const mongoHost = process.env.MONGO_HOST || '127.0.0.1';
const mongoPort = process.env.MONGO_PORT || '27017';
const mongoDatabase = process.env.MONGO_DATABASE || 'wenjuan';
@Module({
  imports: [
    ConfigModule.forRoot(),
    SurveyModule,
    MongooseModule.forRoot(`mongodb://${mongoHost}:${mongoPort}/${mongoDatabase}`),
    UserModule,
    AuthModule,
    AnswerModule,
    StatModule,

  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
