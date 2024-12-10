import { validate, ValidationError } from 'class-validator';

export function ValidateDto(
  dtoClass: new (...args: any[]) => object,
): MethodDecorator {
  return (_, __, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const dtoInstance = new dtoClass(...args);

      const errors: ValidationError[] = await validate(dtoInstance);

      if (errors.length > 0) {
        const returnedValue = errors.map((err) => ({
          [err.property]: Object.values(err.constraints as object),
        }));

        return returnedValue;
      }

      return originalMethod.apply(this, args);
    };
  };
}
