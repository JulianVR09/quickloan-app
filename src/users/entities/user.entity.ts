import { Loan } from "src/loans/entities/loan.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column()
    credit: number;

    @Column({default: true})
    isActive: boolean;

    @OneToMany(()=>Loan, (loan) => loan.user)
    loans: Loan[];

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date;

    @UpdateDateColumn({type: 'datetime'})
    updateAt: Date;
}