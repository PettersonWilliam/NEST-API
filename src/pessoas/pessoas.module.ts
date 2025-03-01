// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Pessoa } from './entities/pessoa.entity';
// import { PessoasService } from './pessoas.service';
// import { PessoasController } from './pessoas.controller';

// @Module({
//     imports: [TypeOrmModule.forFeature([Pessoa])],
//     controllers: [PessoasController],
//     providers: [PessoasService],
//     exports: [PessoasService]
// })
// export class PessoasModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  providers: [PessoasService],
  controllers: [PessoasController],
  exports: [TypeOrmModule] // Certifique-se de exportar o TypeOrmModule
})
export class PessoasModule {}
