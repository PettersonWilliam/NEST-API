import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Pessoa])],
    providers: [PessoasService],
    controllers: [PessoasController],
    exports: [TypeOrmModule] // Exporta o TypeOrmModule para que outros módulos possam usá-lo
})
export class PessoasModule {}
