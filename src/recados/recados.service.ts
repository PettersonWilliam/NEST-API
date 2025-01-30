const { Injectable } = require('@nestjs/common');
import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//PODEMOS ULTILIZAR O CLI PARA CRIAR OS ARQUIVOS DE SERVIÇO, CONTROLLER ETC
//nest g RES PESSOAS - PARA CRIAR UM RECURSO DE PESSOAS

@Injectable()
// @Injectable() // DECORATOR QUE INDICA QUE A CLASSE PODE SER INJETADA EM OUTRAS CLASSES - SERVIÇO QUE VAI SER INJETADO NO CONTROLLER
export class RecadosService {
    constructor(
        @InjectRepository(Recado)
        private readonly recadoRepository: Repository<Recado>
    ) {}

    trowNotFoundError() {
        throw new NotFoundException(`RECADO NÃO ENCONTRADO`);
    }

    async findAll() {
        const recados = await this.recadoRepository.find();
        return recados;
    }

    findOne(id: number) {
        // const recado = this.recados.find(recado => recado.id === id);
        const recado = this.recadoRepository.findOne({
            where: { id }
        });

        if (recado) return recado;

        this.trowNotFoundError();

        // throw new HttpException(`RECADO NÃO ENCONTRADO`, HttpStatus.NOT_FOUND);
        // NESTE CASO ULTILIZAMOS ESSE METODO "HttpException" POIS COMO DAR ERRO, ALEM DA MENSAGEM DE ERRO, ELE RETORNA O STUSCODE DO ERRO "404"
        // throw new Error(`RECADO NÃO ENCONTRADO`, 404); NAO PODEMOS USAR DESSA FORMA POIS ELE SO RECEBE UM PARAMETRO E A APLICACAO VAI QUEBRAR NEST ELE REQUER O STATUSCODE
    }

    async create(createRecadoDto: CreateRecadoDto) {
        const novoRecado = {
            ...createRecadoDto,
            lido: false,
            data: new Date()
        }

        const recado = await this.recadoRepository.create(novoRecado);
        return this.recadoRepository.save(recado);
    }

    async update(id: number, updateRecadoDto: UpdateRecadoDto) {
        // preload => encontra o valor neste caso o ID e tbm recebe como parametro oq eu vc queira atualizar
        const partialRecadoDto =  {
            lido: updateRecadoDto?.lido,
            texto: updateRecadoDto?.texto
        }

        const  recado = await this.recadoRepository.preload({ 
            id,
            ...partialRecadoDto
        });
    
        if (!recado) return this.trowNotFoundError();
    
        await this.recadoRepository.save(recado);

        return recado;
    }

    async remove(id: number) {
        // COM ESSSE FINDONEBY ELE BASICAMENTE USA O METODO FINDONE E PASSA O PARAMETRO QUE QUEREMOS BUSCAR sem precisar passar o where
        //DESSA FORMA AQUI =>  
        //const recado = this.recadoRepository.findOne({
        //  where: { id }
        //});

        const  recado = await this.recadoRepository.findOneBy({ id });
    
        if (!recado) return this.trowNotFoundError();
    
        return this.recadoRepository.remove(recado);
    }
}
