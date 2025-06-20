import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Task } from './entities/task.entity';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:"postgresql://neondb_owner:npg_SEZJQ6qu4VKB@ep-summer-hall-a836di2h-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
      entities: [User, Task],
      synchronize: true, 
      ssl: {
        rejectUnauthorized: false, 
      },
    }),

    AuthModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
