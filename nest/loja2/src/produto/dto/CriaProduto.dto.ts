import { IsNotEmpty, Min, IsNumber, IsUUID } from "class-validator";

export class CriaProdutoDTO{
  // Cada usuário pode cadastrar 1 ou mais produtos. PAra garantir que o usuarioId seja enviado no POST da criação de um produto. Mas desse jeito que eu fiz embaixo só aparece o erro 400
  @IsUUID(undefined, {message: 'ID de usuário inválido'})
  usuarioId:string;

  @IsNotEmpty({message: 'Campo Nome não pode ser vazio'})
  nome:string; 

  // não sei qual regra para decimal com 2 casas
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false})
  @Min(1, {message: 'Campo Valor não pode ser zero'})
  valor:number;

  @IsNumber()
  @Min(0, ({message: 'Campo quantidade não pode ser vazio'}))
  quantidade: number;
}