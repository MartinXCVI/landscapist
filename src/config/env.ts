import { z } from 'zod'

const envSchema = z.object({
  WEB3_FORMS_API_KEY: z.string().min(1, 'WEB3_FORMS_API_KEY cannot be empty'),
})

// Validating and parsing the environment variables
function validateEnv() {
  try {
    return envSchema.parse({
      WEB3_FORMS_API_KEY: import.meta.env.WEB3_FORMS_API_KEY,
    })
  } catch (error) {
    if(error instanceof z.ZodError) {
      const missingVars = error.errors.map(err => err.path.join('.')).join(', ')
      
      if(import.meta.env.PROD) {
        throw new Error(
          `Missing or invalid environment variables: ${missingVars}\n` +
          'Please check your .env file and ensure all required variables are set.'
        )
      }
      
      // Dev: Only a warning and returning and empty string
      console.warn(
        `Missing or invalid environment variables: ${missingVars}`
      )

      // Returning empty string for development
      return {
        WEB3_FORMS_API_KEY: '',
      }
    }
    // For non-Zod errors
    throw error
  }
}

// Export validated config
const env = validateEnv()

export const config = {
  web3FormsApiKey: env.WEB3_FORMS_API_KEY,
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
} as const