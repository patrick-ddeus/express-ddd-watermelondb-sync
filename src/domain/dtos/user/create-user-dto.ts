import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsNumber()
  @IsNotEmpty()
  age!: number;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
  }
}
