import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'usuarios'})
export class UsuarioEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 170, nullable: false })
  email: string;

  @Column({ name: 'senha', length: 255, nullable: false })
  senha: string;

  @CreateDateColumn({ name: 'created_ad' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_ad' })
  updatedAd: string;

  @DeleteDateColumn({ name: 'deleted_ad' })
  deletedAt: string;
}