import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller("home")
export class AppController {
	// constructor(private readonly appService: AppService) { }
	
	@Get("hello") // metodo da solicitação - LER (READ) - GET
	getHello(): string {
		return "Qualquer coisa";
	}
}
