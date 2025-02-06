import { IsEmail } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Recado } from "../../recados/entities/recado.entity";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    @IsEmail()
    email!: string;
        
    @Column()
    passwordHash!: string;    

    @Column({ length: 100 })
    nome!: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    // Uma pessoa podem ter enviados vários recados como "de"
    // Essa relação é feita através do campo "de" na entidade Recado
    @OneToMany(() => Recado, recado => recado.de)
    recadosEnviados!: Recado[];

    // Uma pessoa podem ter recebidos vários recados como "para"
    // Essa relação é feita através do campo "para" na entidade Recado
    @OneToMany(() => Recado, recado => recado.para)
    recadosRecebidos!: Recado[];
}
