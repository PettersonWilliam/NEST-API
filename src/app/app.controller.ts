import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // metodo da Requisição - LER (READ) - GET
  getHello(): string {
    const retorno = 'Retorno Teste';
    return retorno;
  }

  @Get('exemplo') // metodo da Requisição - LER (READ) - GET
  exemploDeRota(): string {
    //dessa forma podemos implementar qualquer regra de negócio
    //ultiliazando o service atraves dos injetores de dependencia la no service
    return this.appService.solucionaExemplo();
  }
}
