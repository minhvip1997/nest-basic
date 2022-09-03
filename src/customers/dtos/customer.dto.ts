import { IsEmail, IsNumber, IsString } from "class-validator";

export class CustomerDto {
  @IsNumber()
  id: number;
  @IsEmail()
  email: string;

  @IsString()
  name: string;
}
