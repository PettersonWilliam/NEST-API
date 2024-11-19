import { Controller, Get } from '@nestjs/common'; // importando o Controller
import { ConceitosManualService } from './conceitos-manual.service'; // importando o Service

@Controller('conceitos-manual') // definindo a rota do controller
export class ConceitosManualControler {
  constructor(private readonly conceitosManualService: ConceitosManualService) {

  }  

  @Get() // metodo da Requisição - LER (READ) - GET
  home(): string {
    return this.conceitosManualService.solucionHome();
  }
}
