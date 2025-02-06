import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRecadoDto {
    @IsString()
    @IsNotEmpty()
    texto!: string;

    // @IsString()
    // @IsNotEmpty()
    // @IsNumber()
    // de!: number;

    // @IsString()
    // @IsNotEmpty()
    // para!: number;
}
