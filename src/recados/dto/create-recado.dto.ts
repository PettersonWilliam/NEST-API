export class CreateRecadoDto {
    // readonly -> QUANDO ADD readonly NAO PODEMOS ALTERAR O VALOR DESSA VARIAVEL
    readonly texto: string; // Texto do recado
    readonly de: string; // Quem enviou o recado
    readonly para: string; // Quem recebeu o recado


    constructor(texto: string, de: string, para: string) {
        this.texto = texto;
        this.de = de;
        this.para = para;
    }
}
