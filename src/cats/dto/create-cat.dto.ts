import { IsInt, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateCatDto {
  @IsString() //VALIDACIÓN PARA STRING
  @MinLength(1) //VALIDACIÓN PARA CANTIDAD DE CARACTERES
  name: string;

  @IsInt() //VALIDACIÓN PARA ENTERO
  @IsPositive() //VALIDACIÓN PARA QUE SEA POSITIVO
  age: number;
  
  @IsString() //VALIDACIÓN PARA STRING
  @IsOptional() //VALIDACIÓN PARA QUE SEA OPCIONAL
  breed?: string; //? INDDICA OPCIONALIDAD
}
