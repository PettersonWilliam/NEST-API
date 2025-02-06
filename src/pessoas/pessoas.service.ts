import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>
  ) {}
  async create(createPessoaDto: CreatePessoaDto) {
    try {
      const dadosPessoa = {
        nome: createPessoaDto.nome,
        email: createPessoaDto.email,
        passwordHash: createPessoaDto.password
      }
  
      const novaPessoa =  this.pessoaRepository.create(dadosPessoa);
      await this.pessoaRepository.save(novaPessoa);
  
      return novaPessoa;
    } catch (error) {
      if ((error as any).code === '23505') {
        throw new ConflictException('E-mail já cadastrado');
      }

      throw new Error('Erro ao cadastrar pessoa');
    }
  }

  async findAll() {
    const pessoas = await this.pessoaRepository.find({
      order: {
        id: 'DESC'
      }
    });

    return pessoas;
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoa`;
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const dadosPessoa = {
      nome: updatePessoaDto?.nome,
      email: updatePessoaDto.email
    }

    const pessoa = await this.pessoaRepository.preload({
      id,
      ...dadosPessoa
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    return await this.pessoaRepository.save(pessoa);
  }

  async remove(id: number) {
    const pessoa = await this.pessoaRepository.findOneBy({
      id
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    return this.pessoaRepository.remove(pessoa);

  }
}
