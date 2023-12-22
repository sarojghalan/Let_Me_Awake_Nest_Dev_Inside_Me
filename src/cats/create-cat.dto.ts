import { z } from 'zod';
import { IsString, IsInt, Length, Max, Min, IsEmail } from 'class-validator';
// creating validation through zod
export const createCatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  })
  .required();
export type CreateCatDtoT = z.infer<typeof createCatSchema>;

// creating validation through class validator
export class CreateCatDto {
  @Length(10, 20)
  name: string;

  @IsInt()
  @Min(0)
  @Max(10)
  age: number;

  @IsString()
  breed: string;

  @IsEmail()
  email: string;
}
