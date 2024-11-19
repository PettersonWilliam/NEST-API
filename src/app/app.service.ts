import { Injectable } from '@nestjs/common';

@Injectable() //injecao de dependencia
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  solucionaExemplo() {
    return 'Exemplo usa o service';
  }
}
