import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
// import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";
import { UsuarioService } from "../usuario.service";

@Injectable() /* para transformar em uma promise */
@ValidatorConstraint({async: true}) 
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {

  constructor(private usuarioService: UsuarioService) {}
  
  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    // const usuarioComEmailExiste = await this.usuarioService.existeComEmail(value);
    
    return true;
    //se devolver false, o class Validator despara os erros.
  }
} 

//decoratorque usa o validator EmailEhUnicoValidator
export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: EmailEhUnicoValidator
    });
  }
}