import { Controller, Get, Param } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    // Rota pra retornar todos os recados
    @Get()
        findAll() {
            return 'Retorna TODOS os recados';
        }

    // Rota para trazer apebas 1 recado
    @Get(':id')
        findOne(@Param('id') id: string) {
            console.log(id, "id");
            
            return `Retorna UM recado de ID ${id}`;
        }
}
