import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaDto } from './create-pessoa.dto';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {

    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    nome!: string;
}
