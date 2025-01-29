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
	HttpCode, 
	ParseIntPipe
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
	constructor(private readonly RecadosService: RecadosService)  {

	}
	// Rota pra retornar todos os recados
	//PODEMOS USAR OS QUERYS OPARAMS PARA PEGAR OS DADOS DA URL
	@HttpCode(HttpStatus.OK)
	@Get()
		async findAll(@Query() pagination: any) {
			const { limit = 10, offiset = 0 } = pagination;

			// return `Retorna TODOS os recados limit ${limit}, offiset ${offiset}`;
			const recados = await this.RecadosService.findAll();
			return recados;
		}

	// Rota para trazer apebas 1 recado
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.RecadosService.findOne(id);
	}

	@Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createRecadoDto: CreateRecadoDto) {
        return this.RecadosService.create(createRecadoDto);
    }

	//@update
	@Patch(':id')
	update(
		@Param('id', ParseIntPipe) id: number, 
		@Body() updateRecadoDto: UpdateRecadoDto
	) {
		return this.RecadosService.update(id, updateRecadoDto);
	}

	// Deleta um recado
	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		//QUANDO USAMOS O "ParseIntPipe" ELE VAI CONVERTER O ID PARA INTEIRO
		// SE PASSARMOS UMA STRING LA NO CLIENT REST / VAI DAR ERRO "message": "Validation failed (numeric string is expected)", POIS ELE ESPERA UM NUMERO
		return this.RecadosService.remove(id);
	}
}
