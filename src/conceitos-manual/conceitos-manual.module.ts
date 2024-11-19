import { Module } from '@nestjs/common';
import { ConceitosManualControler } from './conceitos-manual.controller';
import { ConceitosManualService } from './conceitos-manual.service';

@Module({
  controllers: [ConceitosManualControler],
  providers: [ConceitosManualService],
})
export class ConceitosManualModule {}
