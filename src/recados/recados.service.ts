import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { Pessoa } from '../pessoas/entities/pessoa.entity';

@Injectable()
export class RecadosService {
    constructor(
        @InjectRepository(Recado)
        private readonly recadoRepository: Repository<Recado>,
        @InjectRepository(Pessoa)
        private readonly pessoaRepository: Repository<Pessoa>
    ) {}

    private trowNotFoundError() {
        throw new NotFoundException(`RECADO NÃO ENCONTRADO`);
    }

    async findAll() {
        return await this.recadoRepository.find();
    }

    async findOne(id: number) {
        const recado = await this.recadoRepository.findOne({ where: { id } });
        if (!recado) this.trowNotFoundError();
        return recado;
    }

    async create(createRecadoDto: CreateRecadoDto) {
        const pessoaDe = await this.pessoaRepository.findOne({ where: { id: createRecadoDto.deId } });
        if (!pessoaDe) {
            throw new NotFoundException(`Pessoa com id ${createRecadoDto.deId} não encontrada`);
        }

        const pessoaPara = await this.pessoaRepository.findOne({ where: { id: createRecadoDto.paraId } });
        if (!pessoaPara) {
            throw new NotFoundException(`Pessoa com id ${createRecadoDto.paraId} não encontrada`);
        }

        const novoRecado = this.recadoRepository.create({
            ...createRecadoDto,
            de: pessoaDe,
            para: pessoaPara,
            lido: false,
            data: new Date()
        });
        return await this.recadoRepository.save(novoRecado);
    }

    async update(id: number, updateRecadoDto: UpdateRecadoDto) {
        const pessoaDe = updateRecadoDto.de ? await this.pessoaRepository.findOne({ where: { id: updateRecadoDto.de } }) : undefined;
        if (updateRecadoDto.de && !pessoaDe) {
            throw new NotFoundException(`Pessoa com id ${updateRecadoDto.de} não encontrada`);
        }

        const pessoaPara = updateRecadoDto.para ? await this.pessoaRepository.findOne({ where: { id: updateRecadoDto.para } }) : undefined;
        if (updateRecadoDto.para && !pessoaPara) {
            throw new NotFoundException(`Pessoa com id ${updateRecadoDto.para} não encontrada`);
        }

        const recado = await this.recadoRepository.preload({ 
            id,
            ...updateRecadoDto,
            de: pessoaDe || undefined,
            para: pessoaPara || undefined
        });

        if (!recado) this.trowNotFoundError();
        if (!recado) this.trowNotFoundError();
        return await this.recadoRepository.save(recado!);
    }

    async remove(id: number) {
        const recado = await this.recadoRepository.findOneBy({ id });
        if (!recado) this.trowNotFoundError();
        return await this.recadoRepository.remove(recado!);
    }
}
