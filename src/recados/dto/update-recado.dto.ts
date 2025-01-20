export class UpdateRecadoDto {
    // readonly -> QUANDO ADD readonly NAO PODEMOS ALTERAR O VALOR DESSA VARIAVEL
    readonly texto?: string; // Texto do recado
    readonly de?: string; // Quem enviou o recado
    readonly para?: string; // Quem recebeu o recado

    // QUANDO TBM ADD O "?" NA FRENTE DO ATRIBUTO, ELE SE TORNA OPCIONAL
    // OU SEJA PODEMOS ATULIZAR QUALQUER VALOR DO RECADO
    // NAO NECESSARIAMENTE TEMOS QUE ATUALIZAR TUDO


    constructor(texto: string, de: string, para: string) {
        this.texto = texto;
        this.de = de;
        this.para = para;
    }
}
