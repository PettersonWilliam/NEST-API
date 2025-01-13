export class Recado {
    id: number; // ID do recado
    texto: string; // Texto do recado
    de: string; // Quem enviou o recado
    para: string; // Quem recebeu o recado
    lido: boolean; // Se o recado foi lido ou não
    data: Date; // Data de envio do recado

    constructor(id: number, texto: string, de: string, para: string, lido: boolean, data: Date) {
        this.id = id;
        this.texto = texto;
        this.de = de;
        this.para = para;
        this.lido = lido;
        this.data = data;
    }
}
