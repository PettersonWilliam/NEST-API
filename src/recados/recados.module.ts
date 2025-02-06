import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entity';
import { RecadosService } from './recados.service';
import { RecadosController } from './recados.controller';
import { PessoasModule } from '../pessoas/pessoas.module'; // Importa o módulo de pessoas

@Module({
    imports: [TypeOrmModule.forFeature([Recado]), PessoasModule], // Importa o módulo de pessoas
    providers: [RecadosService],
    controllers: [RecadosController]
})
export class RecadosModule {}
