import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import {getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import {makeExecutableSchema } from '@graphql-tools/schema';


export function upperCaseDirective(directiveName) {
    // return (schema) => {
        return schema => {
          return  mapSchema(schema, {
                [MapperKind.FIELD]: fieldConfig => {
                    const uppercaseDirective = getDirective(schema, fieldConfig, directiveName)?.[0]
                    if(uppercaseDirective) {
                        const {  resolve = defaultFieldResolver}  = fieldConfig;
                        return {
                            ...fieldConfig,
                            resolve: async function (source, args, context, info) {
                                const result = await resolve(source, args, context, info);
                                if(typeof result === "string") {
                                    return result.toUpperCase();
                                }  
                                return result;
                            }
                        }
                    }
                }
            })
        }
    // }
}

export const upperDirectiveTypeDefs = (directiveName) => `directive @${directiveName} on FIELD_DEFINITION`;

export const applyUpperSchemaTransform  = upperCaseDirective('upper');