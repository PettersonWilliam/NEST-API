import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateRecadoDto {
    @IsString()
    @IsNotEmpty()
    texto!: string;

    @IsNumber()
    @IsPositive()
    deId!: number;

    @IsNumber()
    @IsPositive()
    paraId!: number;
}