import { z } from 'zod'

const envSchema = z.object({
  SITE_URL: z.string(),
  WEB3_FORMS_API_KEY: z.string().min(1, 'WEB3_FORMS_API_KEY cannot be empty'),
})

// Validating and parsing the environment variables
function validateEnv() {
  try {
    return envSchema.parse({
      WEB3_FORMS_API_KEY: import.meta.env.WEB3_FORMS_API_KEY,
      SITE_URL: import.meta.env.SITE_URL
    })
  } catch(error) {
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
        SITE_URL: 'http://localhost:4321/',
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
  siteUrl: env.SITE_URL,
  web3FormsApiKey: env.WEB3_FORMS_API_KEY,
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
} as const