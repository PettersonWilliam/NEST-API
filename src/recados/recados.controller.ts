import { 
	Controller,
	Get,
	Param,
	Post,
	Body,
	Patch,
	Delete,
	HttpStatus,
	Query,
	HttpCode 
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
	// Rota pra retornar todos os recados
	//PODEMOS USAR OS QUERYS OPARAMS PARA PEGAR OS DADOS DA URL
	@HttpCode(HttpStatus.OK)
	@Get()
		findAll(@Query() pagination: any) {
			const { limit = 10, offiset = 0 } = pagination;

			return `Retorna TODOS os recados limit ${limit}, offiset ${offiset}`;
		}

	// Rota para trazer apebas 1 recado
	@Get(':id')
		findOne(@Param('id') id: string) {
			return `Retorna UM recado de ID ${id}`;
		}
	@Post()
	//Caso queira mudar o status code - 201 foi oe exemplo do codigo qu eusei
	// @HttpCode(201)

	//Seria uma boa pratica usar da seguinte forma
	// @HttpCode(HttpStatus.Ok) - temos varios status code no nestjs ao inves de ta passando numero
	create(@Body() body: any) {
		return body;
	}

	//@update
	@Patch(':id')
	update(@Param('id') id: string, @Body() body: any) {
		return {
			id,
			...body
		}
	}

	// Deleta um recado
	@Delete(':id')
	remove(@Param('id') id: string) {
		return `Essa rota apaga o ID - ${id}`;
	}
}
