import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";


export class AtualizaUsuarioDTO {
  @IsNotEmpty({message: 'Campo Nome não pode ser vazio'})
  @IsOptional() /* dá a opção de você não atualizar todos os campos, apena so que vc quer */
  nome: string;

  @IsEmail(undefined, {message: 'Campo email não pode ser vazio ou inválido'})
  @EmailEhUnico({ message: 'Já existe um usuário com este email'})
  @IsOptional()
  email: string;

  @MinLength(6, {message: 'Senha com no mínimo 6 caractéres'})
  @IsOptional()
  senha: string;
}