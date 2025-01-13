const { Injectable } = require('@nestjs/common');
import { Recado } from './entities/recado.entity';

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

    findAll() {
        return this.recados;
    }

    findOne(id: string) {
       return this.recados.find(recado => recado.id === +id);
    }

    create(body: any) {
        this.lastId++;
        const novoRecado = {
            id: this.lastId,
            ...body
        }

        this.recados.push(novoRecado);
        return novoRecado;
    }

    update(id: string, body: any) {
        const recadoExistenteIndex = this.recados.findIndex(
            recado => recado.id === +id
        );

        if (recadoExistenteIndex >= 0) {
            const recadoExistente = this.recados[recadoExistenteIndex];

            this.recados[recadoExistenteIndex] = {
                ...recadoExistente,
                ...body
            }
        }



        Object.assign(recadoExistenteIndex, body);
        return recadoExistenteIndex;
    }

    remove(id: string) {
        const recadoExistenteIndex = this.recados.findIndex(
            recado => recado.id === +id
        );

        if (!recadoExistenteIndex) {
            return `Nao existe recado com o id ${id}`;
        }
    
        if (recadoExistenteIndex >= 0) {
            return this.recados.splice(recadoExistenteIndex, 1);
        }

        const recado = this.recados[recadoExistenteIndex];
        return recado;
    }
}
