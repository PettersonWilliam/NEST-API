import { PartialType } from "@nestjs/mapped-types";
import { CreateRecadoDto } from "./create-recado.dto";
import { IsBoolean, IsOptional } from "class-validator";

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
    // readonly -> QUANDO ADD readonly NAO PODEMOS ALTERAR O VALOR DESSA VARIAVEL
    readonly texto?: string; // Texto do recado
    readonly de?: number; // Quem enviou o recado
    readonly para?: number; // Quem recebeu o recado

    @IsBoolean()
    @IsOptional()
    readonly lido?: boolean; // Se o recado foi lido ou não

    // QUANDO TBM ADD O "?" NA FRENTE DO ATRIBUTO, ELE SE TORNA OPCIONAL
    // OU SEJA PODEMOS ATULIZAR QUALQUER VALOR DO RECADO
    // NAO NECESSARIAMENTE TEMOS QUE ATUALIZAR TUDO

    // USAMOS O PARTIALTYPE PARA QUE POSSAMOS ATUALIZAR APENAS OS CAMPOS QUE DESEJAMOS RECEBENDO TODA A VALIDACAO DO CREATE.DTO
    // OU SEJA, SE TIVERMOS ALGUMA VALIDACAO NO CREATE.DTO, ELE TBM VAI TER NO UPDATE.DTO
    // E ALEM DISSO, ELE VAI PERMITIR QUE POSSAMOS ATUALIZAR APENAS OS CAMPOS QUE DESEJAMOS
    // E NAO TODOS OS CAMPOS

    // EXEMPLO
    // {
    //     "texto": "Recado 1",
    //     "de": "João",
    //     "para": "Maria"
    // }
    // NESTE CASO, ELE VAI ATUALIZAR APENAS OS CAMPOS QUE FORAM PASSADOS
    // E NAO TODOS OS CAMPOS
    // E ALEM DISSO, ELE VAI VALIDAR SE OS CAMPOS QUE FORAM PASSADOS ESTAO DE ACORDO COM AS REGRAS DE VALIDACAO QUE FORAM PASSADAS NO CREATE.DTO
    // OU SEJA, SE O TEXTO FOR MENOR QUE 3 CARACTERES, ELE VAI DAR UM ERRO
    // E SE O DE FOR MENOR QUE 2 CARACTERES, ELE VAI DAR UM ERRO
    // E SE O PARA FOR MENOR QUE 2 CARACTERES, ELE VAI DAR UM ERRO
    // E SE O TEXTO FOR MAIOR QUE 255 CARACTERES, ELE VAI DAR UM ERRO

    // E SE O DE FOR MAIOR QUE 50 CARACTERES, ELE VAI DAR UM ERRO
    // E SE O PARA FOR MAIOR QUE 50 CARACTERES, ELE VAI DAR UM ERRO

    // E SE O TEXTO FOR VAZIO, ELE VAI DAR UM ERRO
}
