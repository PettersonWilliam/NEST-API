import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entity';
import { RecadosService } from './recados.service';
import { RecadosController } from './recados.controller';
import { PessoasModule } from '../pessoas/pessoas.module'; // Importe o módulo PessoasModule

@Module({
  imports: [TypeOrmModule.forFeature([Recado]), PessoasModule], // Adicione PessoasModule aos imports
  providers: [RecadosService],
  controllers: [RecadosController]
})
export class RecadosModule {}
