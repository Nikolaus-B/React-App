import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PocModule } from './poc/poc.module';

@Module({
  imports: [PocModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
