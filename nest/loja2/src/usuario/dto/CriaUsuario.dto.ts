import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";


export class CriaUsuarioDTO {
  @IsNotEmpty({message: 'Campo Nome não pode ser vazio'})
  nome: string;

  @IsEmail(undefined, {message: 'Campo email não pode ser vazio ou inválido'})
  @EmailEhUnico({ message: 'Já existe um usuário com este email'})
  email: string;

  @MinLength(6, {message: 'Senha com no mínimo 6 caractéres'})
  senha: string;
}