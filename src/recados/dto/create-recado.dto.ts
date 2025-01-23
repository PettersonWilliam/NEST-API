import { 
    IsString,
    IsNotEmpty,
    MinLength,
    MaxLength 
} from 'class-validator';

export class CreateRecadoDto {
    // readonly -> QUANDO ADD readonly NAO PODEMOS ALTERAR O VALOR DESSA VARIAVEL
    @IsString() // VALIDANDO PARA QUE QLE SO PERMITA SER DE FATO STRING
    @IsNotEmpty() // VALIDANDO PARA QUE NAO SEJA VAZIO
    @MinLength(3) // VALIDANDO PARA QUE TENHA NO MINIMO 3 CARACTERES
    @MaxLength(255) // VALIDANDO PARA QUE TENHA NO MAXIMO 255 CARACTERES

    readonly texto: string; // Texto do recado
    @IsString() // VALIDANDO PARA QUE QLE SO PERMITA SER DE FATO STRING
    @IsNotEmpty() // VALIDANDO PARA QUE NAO SEJA VAZIO
    @MinLength(2) // VALIDANDO PARA QUE TENHA NO MINIMO 2 CARACTERES
    @MaxLength(50) // VALIDANDO PARA QUE TENHA NO MAXIMO 50 CARACTERES


    readonly de: string; // Quem enviou o recado
    @IsString() // VALIDANDO PARA QUE QLE SO PERMITA SER DE FATO STRING
    @IsNotEmpty() // VALIDANDO PARA QUE NAO SEJA VAZIO
    @MinLength(2) // VALIDANDO PARA QUE TENHA NO MINIMO 2 CARACTERES
    @MaxLength(50) // VALIDANDO PARA QUE TENHA NO MAXIMO 50 CARACTERES

    readonly para: string; // Quem recebeu o recado    

    constructor(texto: string, de: string, para: string) {
        this.texto = texto;
        this.de = de;
        this.para = para;
    }
}
