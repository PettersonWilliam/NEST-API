import { Controller, Get, Param, Post, Body, HttpCode } from '@nestjs/common';

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
    @Post()
    //Caso queira mudar o status code - 201 foi oe exemplo do codigo qu eusei
    // @HttpCode(201)

    //Seria uma boa pratica usar da seguinte forma
    // @HttpCode(HttpStatus.Ok) - temos varios status code no nestjs ao inves de ta passando numero
    create(@Body() body: any) {
        console.log(body, "body");
        return body;
    }
}
