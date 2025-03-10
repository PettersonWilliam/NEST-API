import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePessoaDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    nome!: string;
}
