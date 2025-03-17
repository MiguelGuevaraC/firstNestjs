import { IsString, MinLength } from 'class-validator';

export class UpdateBreedDto {
  @IsString() //VALIDACIÓN PARA STRING
  @MinLength(1) //VALIDACIÓN PARA CANTIDAD DE CARACTERES
  name: string;
}
