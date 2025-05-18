import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

interface IsFileOptions {
  mime: ("image/jpg" | "image/png" | "image/jpeg")[];
  maxSize?: number; // Add maxSize option
}

export function IsFile(
  options: IsFileOptions,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isFile",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // Check MIME type
          if (
            !(
              value?.mimetype && (options?.mime ?? []).includes(value?.mimetype)
            )
          ) {
            return false;
          }
          // Check file size (10MB = 10 * 1024 * 1024 bytes)
          if (options?.maxSize && value?.size > options.maxSize) {
            return false;
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          if (
            options?.maxSize &&
            (args.object as Record<string, any>)[args.property]?.size >
              options.maxSize
          ) {
            return `File size must be less than ${
              options.maxSize / (1024 * 1024)
            }MB`;
          }
          return "Invalid file type or size";
        },
      },
    });
  };
}

export class AddUserAttachRequest {
  @IsNotEmpty()
  @IsString()
  @IsFile({
    mime: ["image/jpg", "image/png", "image/jpeg"],
    maxSize: 10 * 1024 * 1024, // 10MB
  })
  img_id_front!: string;

  @IsNotEmpty()
  @IsString()
  @IsFile({
    mime: ["image/jpg", "image/png", "image/jpeg"],
    maxSize: 10 * 1024 * 1024, // 10MB
  })
  img_id_back!: string;

  @IsNotEmpty()
  @IsNumber()
  salary!: number;

  @IsNotEmpty()
  @IsNumber()
  mobile_number!: number;
}
