const { Injectable } = require('@nestjs/common');
import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Injectable()
export class RecadosService {
    private lastId = 1;
    private recados: Recado[] = [
        {
            id: 1,
            texto: 'Recado 1',
            de: 'João',
            para: 'Maria',
            lido: false,
            data: new Date()
        }
    ];

    trowNotFoundError() {
        throw new NotFoundException(`RECADO NÃO ENCONTRADO`);
    }

    findAll() {
        return this.recados;
    }

    findOne(id: number) {
        const recado = this.recados.find(recado => recado.id === id);
        if (recado) return recado;

        this.trowNotFoundError();

        // throw new HttpException(`RECADO NÃO ENCONTRADO`, HttpStatus.NOT_FOUND);
        // NESTE CASO ULTILIZAMOS ESSE METODO "HttpException" POIS COMO DAR ERRO, ALEM DA MENSAGEM DE ERRO, ELE RETORNA O STUSCODE DO ERRO "404"
        // throw new Error(`RECADO NÃO ENCONTRADO`, 404); NAO PODEMOS USAR DESSA FORMA POIS ELE SO RECEBE UM PARAMETRO E A APLICACAO VAI QUEBRAR NEST ELE REQUER O STATUSCODE
    }

    create(createRecadoDto: CreateRecadoDto) {
        this.lastId++;
        const novoRecado = {
            id: this.lastId,
            ...createRecadoDto,
            lido: false,
            data: new Date()
        }

        this.recados.push(novoRecado);
        return novoRecado;
    }

    update(id: string, updateRecadoDto: UpdateRecadoDto) {
        const recadoExistenteIndex = this.recados.findIndex(
            recado => recado.id === +id
        );

        if (recadoExistenteIndex < 0) {
            return this.trowNotFoundError();
        }
        
        const recadoExistente = this.recados[recadoExistenteIndex];
        
        this.recados[recadoExistenteIndex] = {
            ...recadoExistente,
            ...updateRecadoDto
        }

        return this.recados[recadoExistenteIndex];
    }

    remove(id: number) {
        const recadoExistenteIndex = this.recados.findIndex(
            recado => recado.id === id
        );

        if (recadoExistenteIndex < 0) return this.trowNotFoundError();

        const recado = this.recados[recadoExistenteIndex];

        this.recados.splice(recadoExistenteIndex, 1);
            
        return recado;
    }
}
