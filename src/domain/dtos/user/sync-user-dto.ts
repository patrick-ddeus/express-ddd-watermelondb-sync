import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class SyncUserDto {
  @IsDateString()
  @IsNotEmpty()
  lastPulledAt!: string;

  @IsString()
  @IsOptional()
  schemaVersion!: string;

  constructor(partial: Partial<SyncUserDto>) {
    Object.assign(this, partial);
  }
}
