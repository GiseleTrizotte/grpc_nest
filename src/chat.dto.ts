import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ChatDto {
  @IsNotEmpty()
  @IsNumber()
  chatId: number;

  @IsNotEmpty()
  @IsString()
  message: string;
}
