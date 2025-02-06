import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';

@Entity()
export class Recado {
    @PrimaryGeneratedColumn()
    id!: number; // ID do recado

    @Column({ type: 'varchar', length: 255 })
    texto: string; // Texto do recado

    @Column({ default: false })
    lido: boolean; // Se o recado foi lido ou não

    @Column()
    data: Date; // Data de envio do recado

    @CreateDateColumn()
    createdAt?: Date; // Data de criação do recado -> ? = opcional

    @UpdateDateColumn()
    updatedAt?: Date; // Data de atualização do recado -> ? = opcional

    // Muitos recados podem ser enviados por uma unica pessoa
    @ManyToOne(() => Pessoa)
    @JoinColumn({ name: 'de' }) // especifica a coluna de armazena o id da pessoa que ENVIOU o recado
    de: Pessoa; // Quem enviou o recado

   // Relacionamento de vários recados que podem estar relacionados a uma pessoa
   @ManyToOne(() => Pessoa)
   @JoinColumn({ name: 'para' }) //  especifica a coluna de armazena o id da pessoa que RECEBEU o recado
    para: Pessoa; // Quem recebeu o recado

    constructor(texto: string, de: Pessoa, para: Pessoa, lido: boolean, data: Date) {
        this.texto = texto;
        this.de = de;
        this.para = para;
        this.lido = lido;
        this.data = data;
    }
}
