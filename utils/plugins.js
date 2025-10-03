export const authorization = ({ resolve, root, args, context, info }) => {

    console.log({ resolve, root, args, context, info })
//     const protectedFields = ['secretQuery', 'anotherQuery']; // Endpointsrequiring auth
//     const ignoredFields = ['publicQuery']; // Endpoints to ignore

//     if (ignoredFields.includes(fieldName)) {
//         return resolve(root, args, context, info);
//     }

//     if (protectedFields.includes(fieldName)) {
//     const { authToken } = context; // Assume token is passed in context
 
//     if (!authToken) {
//       throw new Error('No authorization token provided');
//     }

//     try {
//       // Verify JWT token (replace 'your-secret-key' with your actual secret)
//       const decoded = jwt.verify(authToken, 'your-secret-key');
//       context.user = decoded; // Add user to context for use in resolvers
//     } catch (err) {
//       throw new Error('Invalid or expired token');
//     }
//   }

    return resolve(root, args, context, info);
}