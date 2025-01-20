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
		findAll(@Query() pagination: any) {
			const { limit = 10, offiset = 0 } = pagination;

			// return `Retorna TODOS os recados limit ${limit}, offiset ${offiset}`;
			return this.RecadosService.findAll();
		}

	// Rota para trazer apebas 1 recado
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.RecadosService.findOne(id);
	}

	@Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createRecadoDto: CreateRecadoDto) {
        return this.RecadosService.create(createRecadoDto);
    }

	//@update
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateRecadoDto: UpdateRecadoDto) {
		return this.RecadosService.update(id, updateRecadoDto);
	}

	// Deleta um recado
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.RecadosService.remove(id);
	}
}
