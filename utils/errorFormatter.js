export default function errorFormatter(err){
  console.log("Error::::::::::::::::", err)
  return {
    message: err.message,
    path: err.path,
    extensions: {
      code: err.extensions?.code,
      errors: err.extensions?.errors
    }
  }
}