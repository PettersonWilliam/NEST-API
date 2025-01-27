import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Recado {
    @PrimaryColumn()
    id: number; // ID do recado

    @Column({type: 'varchar', length: 255})
    texto: string; // Texto do recado

    @Column({type: 'varchar', length: 50})
    de: string; // Quem enviou o recado

    @Column({type: 'varchar', length: 50})
    para: string; // Quem recebeu o recado

    @Column({default: false})
    lido: boolean; // Se o recado foi lido ou não

    @Column()
    data: Date; // Data de envio do recado

    @CreateDateColumn()
    createdAt?: Date; // Data de criação do recado -> ? = opcional

    @UpdateDateColumn()
    updatedAt?: Date; // Data de atualização do recado -> ? = opcional

    constructor(id: number, texto: string, de: string, para: string, lido: boolean, data: Date) {
        this.id = id;
        this.texto = texto;
        this.de = de;
        this.para = para;
        this.lido = lido;
        this.data = data;
    }
}
