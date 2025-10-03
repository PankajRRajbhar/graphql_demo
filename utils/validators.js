import { GraphQLError } from 'graphql';

export const validate =
  (schema, resolver) =>
  (parent, args, ctx, info) => {
    const parsed = schema.validate(args); // throws if invalid
    if(parsed.error) {
      let errors = parsed.error.details;
      throw new GraphQLError('Validation failed', {
        extensions: {
          code: 'VALIDATION_ERROR',
          additionalInfo: 'Validation Error',
          errors: errors.map(err => err.message)
        },
      });
    }
    return resolver(parent, parsed.value, ctx, info);
  };