import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from '../conceitos-manual/conceitos-manual.module';
import { ConceitosAutomaticoModule } from '../conceitos-automatico/conceitos-automatico.module';
import { RecadosModule } from '../recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from '../pessoas/pessoas.module';

@Module({
	// imports: [ConceitosManualModule, ConceitosAutomaticoModule, RecadosModule],
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5433,
			username: 'postgres',
			database: 'postgres',
			password: '32444532pw',
			autoLoadEntities: true, //carrega entidades sem precisar especificar
			synchronize: true // ISSO NAO DEVE SER USADO EM PRODUCAO - sincroniza com o banco automaticamente
		}),
		RecadosModule,
		PessoasModule
	],
	controllers: [AppController],
	providers: [AppService]
})

export class AppModule {}
